[WinHTTrack HTTrack](https://github.com/taoste/Hello-World/blob/master/Tools/USBWebserver/httrack-3.46.1.exe?raw=true) 是一款简单易用的离线浏览器实用工具。

------------------------------------

[**USBWebserver**](https://github.com/taoste/Hello-World/blob/master/Tools/USBWebserver/USBWebserver%20v8.6.zip?raw=true) 使用介绍：http://www.iplaysoft.com/usbwebserver.html

[**下载**](https://github.com/taoste/Hello-World/blob/master/Tools/USBWebserver/USBWebserver%20v8.6.zip?raw=true) 解压后，你可以将 USBWebserver 直接放置到USB硬盘、U盘、本地硬盘任何位置，当然放在会同步网盘也可以。双击 usbwebserver.exe 即可运行软件。但要「注意路径中不能包含中文」，否则 Apache 服务器可能会启动失败，或遇到各种奇怪的问题。

正常情况下，Apache 和 MySQL 服务启动后都会显示绿色的钩，如果出现红色的话，很多时候是默认的端口被占用了。在 Settings (设置) 修改一下端口即可，如下图。

USBWebserver 设置

在设置里面，你可以 Apache 和 MySQL 的端口号，修改网站根目录 (默认位于 USBWebserver 里的 root 文件夹)，以及启动时打开浏览器、启动后隐藏等。

成功启动了 usbwebserver.exe 之后，将 HTML、PHP 代码等网站源文件拷入网站根目录即可通过浏览器访问 http://localhost:端口号/ 打开本地的网站了。至此。本地网站即架设完毕。

架设之后默认信息如下：

```
Php 5.4.17
Httpd 2.4.6
PhpMyAdmin 4.0.4.2
MySQL 5.6.13
Apache / MySql / PHP 的配置文件均位于软件目录下的 settings 文件夹
MySQL数据库帐号：root 密码：usbw
MySQL主机：输入〝localhost〞即可
创建/管理数据库可通过 phpMyadmin 操作：
phpMyadmin 访问地址： http://localhost:端口/phpmyadmin 或者 http://你的IP:端口/phpmyadmin

网站根目录：root
网站首页地址：http://localhost:端口 或者 http://你的IP:端口

```

USBWebserver 可以用于以下的用途：

```
搭建离线或可以随身携带的网站
随时随地开发、调试 PHP 网站代码
省下租用服务器的金钱
通过网盘同步，可在不同的电脑不同的地方继续开发你的网站项目
在网站正式上线前，可以先在本机随意测试不怕搞乱
```

写在后面：

总的来说，USBWebserver 的界面非常简单直观，完全没有任何复杂的东西，即使是新手们都能轻松上手。绿色便携的特性让它的应用变得非常多，譬如做一个随身的 WordPress 来记录私人笔记；随时随地调试网站，测试各类网页程序；学习网页编程，随处编写/测试 PHP 代码等等。

因为  USBWebserver 的快速和省事，可以省下很多时间，更加专注于网站本身的开发调试，个人认为是一款非常理想的快速搭建 WAMP 网站测试环境的工具，值得收藏在 U 盘或丢到网盘里面同步。需要时打开立即就能使用，一切都是那么的简单和美好！

相关文件下载地址：
```
官方网站：访问 http://www.usbwebserver.net/en/
软件性质：免费
解压密码：www.iplaysoft.com
```
下载 USBWebserver 绿色快速搭建PHP环境工具 http://dl.iplaysoft.com/files/3002.html
