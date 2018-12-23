# hologit

**Hologit** is a universal tool for assembling software. It lives inside your project's git repository and enables you to define virtual "holobranches" that can be continuously and efficiently "projected" from a source branch. The projection process handles combining code from remote sources ("compositing") and executing build tools on the result ("lensing") to produce an output file tree.

**Compositing** offers deeper control over which files are pulled from a remote repository and where they are integrated than [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) alone, while being more dependable and tracable than language-specific package managers like [npm](https://www.npmjs.com/) and [composer](https://getcomposer.org/). Instead of copying and moving files around on disk, hologit takes a git-native approach to minimize disk activity by computing new git trees in memory. Computed trees may be written to disk later or used as input to another process without the overhead.

**Lensing** can execute any existing code or build tool consistently by leveraging [habitat](https://www.habitat.sh/) and using containers where necessary. However, it also opens the door to a new generation of git-native build tools that do as much of their work as possible in memory, reading and writing to git's object database instead of a working tree on disk.

## Quickstart

### Create a repository with some minimal code

To start this example, we'll use [the starter template from Bootstrap's *Getting Started* guide](https://getbootstrap.com/docs/4.2/getting-started/introduction/#starter-template) to create a website:

```console
$ git init holo-example
Initialized empty Git repository in /Users/chris/holo-example/.git/
$ cd holo-example/
$ curl -s https://raw.githubusercontent.com/hologit/examples/basic/index.html > index.html
$ git add index.html
$ git commit -m "Add Bootstrap's starter template as index.html"
[master (root-commit) 82a1a39] Add bootstrap's starter template as index.html
 1 file changed, 22 insertions(+)
 create mode 100644 index.html
```

### Install hologit

Hologit can be installed via habitat:

```console
$ hab pkg install -b jarvus/hologit
» Installing jarvus/hologit
☁ Determining latest version of jarvus/hologit in the 'stable' channel
→ Using jarvus/hologit/0.3.0/20181015020008
★ Install of jarvus/hologit/0.3.0/20181015020008 complete with 0 new packages installed.
» Binlinking git-holo from jarvus/hologit/0.3.0/20181015020008 into /bin
★ Binlinked git-holo from jarvus/hologit/0.3.0/20181015020008 to /bin/git-holo
```

or with npm:

```console
$ npm install -g hologit
# coming soon
```

### Initialize .holo/ configuration

Hologit configuration is stored under the `.holo/` tree at the root of a repository. Initialize it in each branch that will generate projections:

```console
$ git holo init
initialized .holo/config.toml for holo-example
$ git commit -m "Initialize .holo/ configuration"
[master 3ae86bd] Initialize .holo/ configuration
 1 file changed, 2 insertions(+)
 create mode 100644 .holo/config.toml
```

### Define and project a holobranch

- A static HTML file with bootstrap/jquery CDN links

### Merge external code via a holo source

- Pull bootstrap and jquery sources

### Assemble the complete source code via a holo lens

- Apply sass compilation and compression via generic lenses

### Make use of a projected tree

- Archive tree-ish
- Write to a real branch
- Push to github gh-pages

## Advanced Usage

### Overlay a project

### Build new holo lenses

## Roadmap

## Reference

## TODO

- [ ] Have `project` fetch and read source HEAD if no submodule commit is found
- [ ] Refactor `source add` and `source fetch` to use common code, leave things in same state
