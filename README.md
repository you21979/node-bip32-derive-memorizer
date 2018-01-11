# node-bip32-derive-memorizer

## install

```
npm i bip32-derive-memorizer
```

## cache image

```
{
  '0': [node1, node2],
  '0/0': [node1, node2],
  '0/0/0': [node1, node2],
  '0/0/1': [node1, node2],
  '0/1': [node1, node2],
  '0/2': [node1, node2],
}
```

```
set("0/0", [node1, node2])
[node1, node2] = get("0/0")
```

