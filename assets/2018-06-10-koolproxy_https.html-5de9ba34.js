import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as a,a as o,b as t,d as n}from"./app-cc762132.js";const p={},c=o("div",{class:"hint-container warning"},[o("p",{class:"hint-container-title"},"注意"),o("p",null,"KoolProxy 已经很长时间没有更新了，视频广告规则经常过期。有人反馈本文已失效。")],-1),_=o("p",null,"koolproxy 是可以运行在路由器上的广告屏蔽软件，跟其他最大的区别就是支持 https , 能有效屏蔽最新的视频应用广告（播个 10 分钟视频，广告 60 秒。。。）",-1),i=o("p",null,"为了屏蔽 https 广告，koolproxy 需要在每台设备上安装 https 证书。但我访问证书地址 110.110.110.110 时，却被提示无法访问。",-1),h=o("p",null,"这是我们需要进入路由器后台，对证书地址进行操作。",-1),d=o("p",null,[t("进入路由器后台，一般设置-Tools-Run Cmd ,运行命令 "),o("code",null,"iptables -t nat -I PREROUTING -d 110.110.110.110 -p tcp --dport 80 -j REDIRECT --to 3000"),t("。重启后，该命令失效。")],-1),u=o("figure",null,[o("img",{src:"https://img.newzone.top/20180610143928.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),o("figcaption")],-1),m={href:"http://koolshare.cn/thread-80430-1-1.html",target:"_blank",rel:"noopener noreferrer"},x=o("p",null,[t("保存 Koolproxy 设置后，一定要"),o("strong",null,"重启路由"),t("，否则可能部分屏蔽设置未成功生效。")],-1),f=o("p",null,[o("strong",null,"参考资料：")],-1),g={href:"https://github.com/koolproxy/merlin-koolproxy",target:"_blank",rel:"noopener noreferrer"},k={href:"http://koolshare.cn/thread-81712-1-1.html",target:"_blank",rel:"noopener noreferrer"};function y(b,E){const e=r("ExternalLinkIcon");return s(),a("div",null,[c,_,i,h,d,u,o("p",null,[t("运行命令后，就可以下载 https 证书，之后的设置参考 "),o("a",m,[t("Merlin 版 Koolproxy3.1.x 使用教程"),n(e)]),t("。")]),x,f,o("ul",null,[o("li",null,[o("a",g,[t("koolproxy 项目地址"),n(e)])]),o("li",null,[o("a",k,[t("失效链接"),n(e)])])])])}const v=l(p,[["render",y],["__file","2018-06-10-koolproxy_https.html.vue"]]);export{v as default};
