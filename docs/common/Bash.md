## Navigate Filesystem

### pwd

显示当前的路径

```bash
$ pwd
/users/administrator/src/doc
```

### cd

即 change directory。后接路径可以更改当前目录

### ls

参数：

- `-l` 列出更多详细信息
- `-a` 列出所有文件（包括隐藏文件）

## View Files and Folders

### cat

参数：

- `-n` 显示行号

### less

更好地显示文件内容。（类似于用 vim 打开文件，vim 中的命令基本都可以使用）

## Create and Delete Files and Folders

### touch

用于创建文件

### echo

输出内容 （若指定文件名不存在则会自动创建）

- 写入内容到某个文件(覆盖)

  ```bash
  $ echo `hi` > file.txt
  ```

- 写入内容到某个文件（非覆盖）

  ```bash
  $ echo `hi world` >> file.txt
  ```

### mkdir

在当前路径创建文件夹

若需要同时创建多个层级文件夹，可以传递参数 `-p`

```bash
$ mkdir -p a/b/c
```

### rm

默认不加参数只能删除指定文件。（注意：这里的删除是永久性删除）

参数：

- `-f` 强制删除
- `-r` 递归处理，将指定目录下所有文件和子目录一并处理

## Move and Copy File and Folders

### mv

`mv 要移动的文件名 移动后文件的位置`

如何重命名一个文件？

```bash
$ mv a.js b.js
```

### cp

复制文件，用法同上

加上参数 `-R` 可以递归处理

## Find Files and Folders

### find

```bash
$ ls images
1.png 2.jpg 3.JPG 4.png

$ find images/ -name "*.png"
images/1.png images/2.png

# iname 即 case insensitive
$ find images/ -iname "*.jpg"
images/2.jpg images/3.JPG
```

## Search for Text

### grep

```bash
# 在 lib/npm.js 中查找带有 "npm.config.get" 字段的行，标出字段颜色及行号
$ grep --color -n "npm.config.get" lib/npm.js
```

## Make HTTP Requests

`curl`

参数：

- `-i` 列出响应头
