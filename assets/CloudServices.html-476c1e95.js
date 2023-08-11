import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as t,a as n,b as e,d as s,e as r}from"./app-cc762132.js";const d={},c=r('<h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h2><p>国内服务器带宽限制较高，高带宽按量付费，随着访客数量的增加，费用也会急剧上升。而固定流量宽带，网站打开速度明显变慢。为减少服务器的带宽压力，可将静态文件、图片放在 CDN 上托管，而非服务器上。</p><h3 id="静态文件" tabindex="-1"><a class="header-anchor" href="#静态文件" aria-hidden="true">#</a> 静态文件</h3><p>静态文件原本使用公开资源库，但国外库有被不稳定，国内又有时碰上服务崩溃，访问速度慢。最终还是选择自建部署 oss.newzone.top。</p><h3 id="图床" tabindex="-1"><a class="header-anchor" href="#图床" aria-hidden="true">#</a> 图床</h3><p>自建图床的成本并不高，只需续费域名就能确保图片的长期保存。我目前使用七牛云配合 Picgo 来搭建图床，每月费用大约十几元。</p><p>曾经尝试过将第三方图床作为临时图床，但仅三天后，图片就全部失效了，导致了大量图片的丢失。这次经历让我深刻认识到，即使是临时需求，也不应依赖第三方图床。</p><h3 id="全站加速" tabindex="-1"><a class="header-anchor" href="#全站加速" aria-hidden="true">#</a> 全站加速</h3><p>使用 CDN 全站加速，能实现用户就近访问，不过也存在些问题。</p><ul><li>一个 CDN 只能为一个域名加速，加速的域名即为目标域名。</li><li>CDN 服务商可能要求使用其自有 DNS，比如阿里云。</li><li>如果加速区域选择「全球（不包含中国内地）」。国内用户会访问国外 CDN 节点，而非国内的源站服务器。</li><li>迁移阿里云 DNS 时，注意关闭<strong>静态协议跟随回源，否则会网站重复调整</strong>。</li></ul><h2 id="第三方服务" tabindex="-1"><a class="header-anchor" href="#第三方服务" aria-hidden="true">#</a> 第三方服务</h2><h3 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel</h3><p>Vercel 是一家提供开发、预览和部署网页前端的云平台服务商。它主要用于前端项目，不原生支持 PHP 和 node 项目，每月提供 100G 免费流量。</p>',13),p={href:"https://vercel.com/guides/using-cloudflare-with-vercel",target:"_blank",rel:"noopener noreferrer"},u={id:"fly-io",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#fly-io","aria-hidden":"true"},"#",-1),m={href:"http://fly.io",target:"_blank",rel:"noopener noreferrer"},v={href:"http://Fly.io",target:"_blank",rel:"noopener noreferrer"},b={href:"http://Fly.io",target:"_blank",rel:"noopener noreferrer"},f={href:"http://fly.io",target:"_blank",rel:"noopener noreferrer"},k=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初次构建</span>
fly launch
<span class="token comment"># 部署，官方建议开两台机器</span>
flyctl deploy

<span class="token comment"># 将机器内存改为 512</span>
fly scale memory <span class="token number">512</span>
<span class="token comment"># 控制机器数量，默认为 2</span>
fly scale count <span class="token number">2</span>
<span class="token comment"># 无法连接docker，则使用</span>
fly wireguard websockets <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cloudflare-tunnel" tabindex="-1"><a class="header-anchor" href="#cloudflare-tunnel" aria-hidden="true">#</a> CloudFlare Tunnel</h3>`,2),_={href:"https://sspai.com/post/79278",target:"_blank",rel:"noopener noreferrer"},g=r(`<p>目前，我已通过 CloudFlare Tunnel 部署了 RSS 订阅源、GoogleAuth、PodCast 等服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本地 Dockerfile 架构镜像</span>
<span class="token function">sudo</span> <span class="token function">docker</span> build <span class="token parameter variable">-t</span> strapiauth <span class="token builtin class-name">.</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">1337</span>:1337 <span class="token parameter variable">--name</span> strapiauth strapiauth

<span class="token comment"># tunnel</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> cloudflaretunnel cloudflare/cloudflared:latest tunnel --no-autoupdate run <span class="token parameter variable">--token</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="腾讯云境外" tabindex="-1"><a class="header-anchor" href="#腾讯云境外" aria-hidden="true">#</a> 腾讯云境外</h3><p>腾讯云香港已无轻量服务器供应，但可购买新加坡、日本的服务器。价格实惠，2 核 2G，30M 宽带，每月 33 元。但国内连接速度较慢，仅适合境外用户。</p>`,4);function x(y,C){const a=o("ExternalLinkIcon");return i(),t("div",null,[c,n("p",null,[e("如果你的项目超出流量，可以参考 "),n("a",p,[e("How do I use a Cloudflare domain with Vercel?"),s(a)]),e("，使用 CloudFlare 进行代理，但需注意检查是否出现过多重定向。在国内可能定位到被屏蔽的 CloudFlare 节点，从而导致有时无法访问。Vercel 现已支持国内电话认证。如流量超出不多，可切换账户部署。")]),n("h3",u,[h,e(),n("a",m,[e("fly.io"),s(a)])]),n("p",null,[n("a",v,[e("Fly.io"),s(a)]),e(" 是一家提供容器化部署的服务商，能根据流量动态调整资源。由于国内无法部署 Google Auth，因此我将认证服务放在 "),n("a",b,[e("Fly.io"),s(a)]),e(" 上，使用了两台 shared-cpu-1x@512MB 的机器，每月账单 1.5 刀。但不清楚是不是配置不够，"),n("a",f,[e("fly.io"),s(a)]),e(" 的机器很容易报错。")]),k,n("p",null,[e("CloudFlare Tunnel 可作为 NAS 的轻量级扩展，一个 Tunnel 能将多个服务托管到不同的子域名。具体部署流程，请参考 "),n("a",_,[e("CloudFlare Tunnel 免费内网穿透的简明教程"),s(a)]),e("。需注意，该服务与宝塔的官方 Docker 镜像存在冲突，因此不要同时使用。")]),g])}const F=l(d,[["render",x],["__file","CloudServices.html.vue"]]);export{F as default};
