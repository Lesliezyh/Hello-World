=====================================================================

本软件仅供学习交流使用，版权归原作者所有，请在下载24小时后自行删除，出现任何版权问题纠纷与赢政天下论坛无关

=====================================================================

【Adobe Acrobat XI Pro 11.0.11 多国语言版】

=====================================================================

2015.5.12

更新文档

11.0.10补丁赋予众多更新内容，详情请访问：
https://www.adobe.com/devnet-docs/acrobatetk/tools/ReleaseNotes/11/11.0.11.html

=====================================================================

考虑到Acrobat XI安装、使用、更新可能出现的问题，
本版安装程序不集成安装内含破解和更新的Acrobat XI，
而采用 原版安装（双安装模式，添加忽略AAM安装）+离线激活 +独立补丁

注：大师版Acrobat使用集成模式

-------------------------------------

基于对adobe msi/msp的理解，不推荐通过setup.ini添加PATCH行直接安装补丁的做法。本文不做赘述。

-------------------------------------

Acrobat XI离线激活方法与大师版离线激活相似



修改hosts文件屏蔽联网激活
C:\Windows\System32\drivers\etc\hosts

127.0.0.1	lm.licenses.adobe.com
127.0.0.1	na2m-pr.licenses.adobe.com
127.0.0.1	practivate.adobe.com
127.0.0.1	activate.adobe.com
127.0.0.1	ereg.adobe.com
127.0.0.1	wip.adobe.com
127.0.0.1	lmlicenses.wip4.adobe.com

HOST处理后，一般情况下无需断网安装。如果要激活的产品处于试用状态则必须断网才能输入序列号再离线激活。

注意：全局代理环境（如VPN）下HOST不起作用，必须在防火墙中屏蔽adobe_licutil.exe的网络访问

安装Acrobat

运行 注册机，点击GENERATE生成Serial，将序列号复制粘贴到Acrobat安装程序中
（请勿手贱多点GENERATE，请勿关闭注册机）

正常安装完成

打开Acrobat主程序

稍等弹出验证菜单
若因各种原因没有弹出验证菜单，打开“菜单”->“帮助”->“产品注册”（此菜单需等待10~20秒才显示正常！）

点击左上“连接Internet时是否出现问题？”
点击右下角“脱机激活”，点击右下角“生成请求代码”，弹出“脱机激活”
全选复制“请求代码”，复制到注册机第二行Request中
点击注册机GENERATE按钮，生成响应代码，复制注册机第三行Activation框中文字
回到“脱机激活”中，粘贴到响应代码框中，点击“激活”，完成

=====================================================================

Adobe After effects CC 2018免费永久下载安装教程_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili
https://www.bilibili.com/video/av28763598/

微信公众号：尹训标（ID：yxb7621）
https://mp.weixin.qq.com/s/x-1WCxqIs-5XfClla-86MQ
--------------------------------------------------

Adobe After EffectsCS6-CC2018系列版本
尹训标  尹训标  7月11日

Adobe After Effects CS6
https://pan.baidu.com/s/1PIJCtq70nqKchCZbNNzQKQ 密码：1g55

Adobe After Effects CC
https://pan.baidu.com/s/19Rm-zZnxOmQAP5Ys4Wc4Tw 密码：y2bz

Adobe After Effects CC 2015
https://pan.baidu.com/s/1G09KFT1hOgtE12gOSZ8lgA 密码：4b2m

Adobe After Effects CC 2017
https://pan.baidu.com/s/1DVABcPnbnX3VVy3s8fe5BA 密码：mhos
--------------------------------------------------
