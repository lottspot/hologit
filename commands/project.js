const logger = require('../lib/logger.js');
const git = require('git-client');

exports.command = 'project <source-branch> <holo-branch>';
exports.desc = 'Projects a holo-branch based on given source-branch';
exports.builder = {
    'source-branch': {
        describe: 'The branch to read projection map from'
    },
    'holo-branch': {
        describe: 'The branch to write hologit projection to'
    }
};

exports.handler = async argv => {
    // execute command
    try {
        const hash = await project(argv);
        console.log(hash);
        process.exit(0);
    } catch (err) {
        console.error('Command failed:', err);
        process.exit(1);
    }
};


/**
 * Initialize a holobranch
 * - [X] Check if branch exists already (die for now, merge on top of later)
 * - [X] Try loading repo with js-git and loading a tree
 * - Load sources and mounts from topBranch
 * - Loop sources and generate commit for each
 * - Merge new commit onto virtualBranch
 */
async function project ({ sourceBranch, holoBranch }) {
    if (!sourceBranch) {
        throw new Error('sourceBranch required');
    }

    if (!holoBranch) {
        throw new Error('holoBranch required');
    }

    logger.info('hologit-init', { sourceBranch: sourceBranch, holoBranch: holoBranch });

    // var repo = yield git.getRepo('js-git/mixins/create-tree'),
    //     refs = yield {
    //         sourceBranch: repo.readRef('refs/heads/' + sourceBranch),
    //         holoBranch: repo.readRef('refs/heads/' + holoBranch)
    //     };

    // // check state of refs
    // if (!refs.sourceBranch) {
    //     throw 'branch ' + sourceBranch + ' not found';
    // }

    // if (refs.holoBranch) {
    //     // TODO: allow and apply merge instead
    //     throw 'branch ' + holoBranch + ' already exists';
    // }

    // var sourceCommit = yield repo.loadAs('commit', refs.sourceBranch),
    //     sourceTree = yield repo.loadAs('tree', sourceCommit.tree);

    // var myTreeHash = yield repo.createTree({
    //     'php-classes': sourceTree['php-classes'],
    //     'php-config': sourceTree['php-config']
    // });

    // debugger;

    // var myTree = yield repo.loadAs('tree', myTreeHash[0]);

    // var myOtherTreeChanges = [
    //     {
    //         path: 'foo-classes',
    //         mode: sourceTree['php-classes'].mode,
    //         hash: sourceTree['php-classes'].hash
    //     },
    //     {
    //         path: 'foo-config',
    //         mode: sourceTree['php-config'].mode,
    //         hash: sourceTree['php-config'].hash
    //     }
    // ];

    // myOtherTreeChanges.base = myTreeHash[0];

    // var myOtherTreeHash = yield repo.createTree(myOtherTreeChanges);
    // var myOtherTree = yield repo.loadAs('tree', myOtherTreeHash[0]);

    // debugger;

    // // var treeStream = yield repo.treeWalk(sourceCommit.tree),
    // //     object;

    // // while (object = yield treeStream.read(), object !== undefined) {
    // //     console.log(object.hash + "\t" + object.path);
    // // }
}