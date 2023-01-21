# Use Tree State
[![travis build](https://img.shields.io/travis/com/shunjizhan/use-tree-state?logo=travis)](https://travis-ci.com/shunjizhan/use-tree-state) [![codecov](https://codecov.io/gh/shunjizhan/use-tree-state/branch/main/graph/badge.svg?token=R15MSCTFHN)](https://codecov.io/gh/shunjizhan/use-tree-state) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/use-tree-state?color=light%20green&label=only&logo=webpack) ![dependency](https://img.shields.io/badge/dependency-zero-brightgreen?&logo=git)  
[![npm](https://img.shields.io/npm/v/use-tree-state?logo=npm)](https://www.npmjs.com/package/use-tree-state) [![npm](https://img.shields.io/npm/dm/use-tree-state?logo=DocuSign&color=blue)](https://www.npmjs.com/package/use-tree-state) ![GitHub top language](https://img.shields.io/github/languages/top/shunjizhan/use-tree-state?logo=react)

A super-light and customizable React hook to manage tree state like never before ✨✨

An example package that uses this hook internally: [react-folder-tree](https://www.npmjs.com/package/react-folder-tree)
## Features
✅ **built in CRUD handlers**: `add`, `modify`, `delete` tree nodes with 1 line of code  
✅ **custom handlers**: define any custom state transition for your need  
✅ **half check**: auto calculate new `checked` status for all nodes  
✅ **onChange**: listen to state change and events  

## Usage
### 🌀 install
```bash
$ yarn add use-tree-state
$ npm install use-tree-state --save
```

### 🌀 initialization
```ts
import useTreeState, { testData } from 'use-tree-state';

const TreeApp = () => {
  const { treeState } = useTreeState({ data: testData });

  return (<Tree state={ treeState } />);
};
```

### 🌀 custom initialization
Initial tree state is an object that describes a nested tree node structure, which looks like:
```jsx
{
  // reserved keys, can customize initial value
  name: 'root node',  
  checked (optional): 0 (unchecked, default) | 0.5 (half checked) | 1(checked),
  isOpen (optional): true (default) | false,
  children (optional): [array of treenode],

  // internal key (auto generated), plz don't include it in the initial data
  _id: 0,

  // all other keys are not reserved, can carry any extra info about this node
  nickname (optional): 'pikachu',
  url (optional): 'www.pokemon.com',
  ...
}
```
`checked` and `isOpen` status could be auto initialized by props `initCheckedStatus` and `initOpenStatus`. We can also provide data with custom `checked` and `isOpen` status, and set `initCheckedStatus` and `initOpenStatus` to `'custom'`.

Example:
```ts
const { treeState } = useTreeState({
  data: testData,
  options: {
    initCheckedStatus: 'checked',   // 'unchecked' (default) | 'checked' | 'custom'
    initOpenStatus: 'open',         // 'open' (default) | 'closed' | 'custom'
  }
});
```

### 🌀 update tree state
There are a couple built in tree state reducers that can update tree state conveniently.

Note that these `reducers` are slightly different than `redux reducers`. These are more like  `wrapped reducers` which are functions that

`f(path: array<int>, ...args) => update state internally`  
or   
`fByProp(propName: string, targetValue: any, ...args) => update state internally`

For more details please refer to [Built-in Reducers](#built-in-reducers) section.
```ts
const TreeApp = () => {
  const { treeState, reducers } = useTreeState({ data: testData });
  const {
    // update state using node's path to find target
    checkNode,
    toggleOpen,
    renameNode,
    deleteNode,
    addNode,

    // update state using any node's property to find target
    checkNodeByProp,
    toggleOpenByProp,
    renameNodeByProp,
    deleteNodeByProp,
    addNodeByProp,
  } = reducers;

  const check_first_node = () => checkNode([0]);
  const check_node_whos_name_is_Goku = () => checkNodeByProp('name', 'Goku');

  const open_first_node = () => toggleOpen([0], 1);
  const open_node_whos_url_is_www = () => toggleOpenByProp('url', 'www', 1);
  const close_node_whos_num_is_123 = () => toggleOpenByProp('num', 123, 0);

  const rename_third_node_to_pikachu = () => renameNode([2], 'pikachu');
  const rename_snorlax_node_to_pikachu = () => renameNode('name', 'snorlax', 'pikachu');

  const remove_fourth_node = () => deleteNode([3]);
  const remove_unnecessary_node = () => deleteNodeByProp('necessary', false);

  const add_leaf_node_in_root_node = () => addNode([], false);
  const add_parent_node_in_Pokemon_node = () => addNodeByProp('type', 'Pokemon', true);

  return (...);
};
```

### 🌀 onChange listener
we can pass in an `onChange(newState: tree-state-obj, event: obj)` to the hook to listen for state change event.
```ts
const handleStateChange = (newState, event) => {
  const { type, path, params } = event;

  console.log('last event: ', { type, path, params });
  console.log('state changed to: ', newState);
};

const { treeState } = useTreeState({
  data: testData,
  onChange: handleStateChange,      // <== here!!
});
```


## Built-in Reducers
There are two types of built in reducers (or call it handlers if you prefer) that differ in how they find target node to operate on.

#### 1) find target node by path
- `reducers.checkNode`
- `reducers.toggleOpen`
- `reducers.renameNode`
- `reducers.deleteNode`
- `reducers.addNode`

their format is `f(path: array<int>, ...args) => update state internally`, where `path` is an array of indexes from root to the target node.

An example that shows each node and corresponding path
```ts
const treeState = {
  name: 'root',         // path = []
  children: [
    { name: 'node_0' }    // path = [0]
    { name: 'node_1' }    // path = [1]
    {
      name: 'node_2',     // path = [2]
      children: [
        { name: 'node_2_0' },   // path = [2, 0]
        { name: 'node_2_1' },   // path = [2, 1]
      ],
    }
  ],
};
```

#### 2) find target node by property (can be any property in tree node data)
- `reducers.checkNodeByProp`
- `reducers.toggleOpenByProp`
- `reducers.renameNodeByProp`
- `reducers.deleteNodeByProp`
- `reducers.addNodeByProp`

their format is `fByProp(propName: string, targetValue: any, ...args) => update state internally`


### 🌀 reducers details

#### • `checkNode(path: array<int>, checked: 1 | 0)`
#### • `checkNodeByProp(propName: string, targetValue: any, checked: 1 | 0)`
Set `checked` property of the target node, `1` for 'checked', `0` for 'unchecked'.

It will also update checked status for all other nodes:
- if we (un)checked a parent node, all children nodes will also be (un)checked
- if some (but not all) of a node's children are checked, this node becomes half check (internally set `checked` = 0.5)

<br>

#### • `toggleOpen(path: array<int>, isOpen: bool)`
#### • `toggleOpenByProp(propName: string, targetValue: any, isOpen: bool)`
Set the open status `isOpen` for the target node. `isOpen: false` usually means in UI we shouldn't see it's children.

**This only works for parent nodes**, which are the nodes that has `children` property.

<br>

#### • `renameNode(path: array<int>, newName: string)`
#### • `renameNodeByProp(propName: string, targetValue: any, newName: string)`
You know what it is.

<br>

#### • `deleteNode(path: array<int>)`
#### • `deleteNodeByProp(propName: string, targetValue: any)`
Delete the target node. If target node is a parent, all of it's children will also be removed.

<br>

#### • `addNode(path: array<int>, hasChildren: bool)`
#### • `addNodeByProp(propName: string, targetValue: any, hasChildren: bool)`
Add a node as a children of target node. `hasChildren: true` means this new node is a parent node, otherwise it is a leaf node.

**This only works for parent nodes**.

<br>

#### • `setTreeState(newState: tree-state-object)`
Instead of 'update' the tree state, this will set whole tree state directly. Didn't test this method, but leave this api anyways, so use with cautions! And plz [open an issue](https://github.com/shunjizhan/use-tree-state/issues) if it doesn't work : )

## Custom Reducers
There are two ways to build custom state transition functions. We provide an util to help find the target node:  `findTargetNode(root: tree-state-obj, path: array<int>)` .

### 🌀 method 1: wrap custom reducers (recommended)
We can build any custom reducers of format

`myReducer(root: tree-state-obj, path: array<int> | null, ...params): tree-state-obj`

and pass it to the hook constructor. Hook will then expose a wrapped version of it, and we can use it like

`reducers.myReducer(path: array<int> | null, ...params)` 

to update the treeState. 
```ts
import useTreeState, {
  testData,
  findTargetNode,
} from 'use-tree-state';

// this app demos how to build a custom reducer that rename a node to 'pikachu'
const TreeApp = () => {
  // our custom reducer
  const renameToPikachuNTimes = (root, path, n) => {
    const targetNode = findTargetNode(root, path);
    targetNode.name = 'pika'.repeat(n);

    return { ...root };
  };

  const { treeState, reducers } = useTreeState({
    data: testData,
    customReducers: {
      renameToPikachuNTimes,  // pass in and hook will wrap it
    },
  });

  const renameFirstNodeToPikaPikaPika = () => {
    // use the wrapped custom reducer
    reducers.renameToPikachuNTimes([0], 3);
  }

  return (<>
    <button onClick={ renameFirstNodeToPikaPikaPika }>
      pika pika
    </button>

    <Tree state={ treeState } />
  </>);

};
```

### 🌀 method 2: set tree state from outside
```ts
const TreeApp = () => {
  const { treeState, reducers } = useTreeState({ data: testData });
  const { setTreeState } = reducers;

  // our custom reducer to set tree state directly
  const renameToPikachuNTimes = (root, path, n) => {
    // treeState is a ref to the internal state, plz don't alter it directly
    const newState = deepClone(root); 

    const targetNode = findTargetNode(newState, path);
    targetNode.name = 'pika'.repeat(n);

    setTreeState(newState);
  };

  const renameFirstNodeToPikaPikaPika = () => {
    renameToPikachuNTimes(treeState, [0], 3);
  }

  return (<>
    <button onClick={ renameFirstNodeToPikaPikaPika }>
      pika pika
    </button>

    <Tree state={ treeState } />
  </>);
};
```

### 🌀 find node by any node property
[⚡️live exmaple](https://codesandbox.io/s/react-playground-forked-55bt9?file=/index.js)

Other than the built-in reducers that **CRUD by prop**, we can build more general reducers that **do anything by prop**, with the help of these two adapters:
- `findTargetPathByProp(root: tree-state-obj, propName: string, targetValue: string): array<int>`  
- `findAllTargetPathByProp(root: tree-state-obj, propName: string, targetValue: string): array<array<int>>` 

For example, let's rewrite `renameNodeByProp` in a more custom way
```ts
import { findTargetPathByProp } from 'use-tree-state';

// our custom reducer, note that we omit the `path` param as _ since we don't need it
const renameNodeByTargetName = (root, _, targetName, newName) => {
  // only need this one extra line to find path first
  // if 'name' is not unique, we can find all nodes by `findAllTargetPathByProp`
  const path = findTargetPathByProp(root, 'name', targetName);    // <== here!!!

  // then everything else is just the same
  const targetNode = findTargetNode(root, path);
  targetNode.name = newName;

  return { ...root };
};

// ......

// then we can use it like
reducers.renameNodeByTargetName(null, 'snorlax', 'pikachu');
```

**Side Notes**
We chose to use `path` to find target node as the primary interface because:
- path is always unique
- this is the fastest way to find a target node
- we can dynamically general path in `<Tree />` component, which perfectly matches such interface ([example](https://github.com/shunjizhan/react-folder-tree/blob/master/src/components/TreeNode/TreeNode.jsx#L30))

## Bugs? Questions? Contributions?
Feel free to [open an issue](https://github.com/shunjizhan/use-tree-state/issues), or create a pull request!