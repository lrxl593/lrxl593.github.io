# Minlie Huang's Homepage

原站 <https://hml.coai.cs.tsinghua.edu.cn/hml> 的 GitHub Pages 静态迁移版。保留原站页面布局、七个栏目、论文年份筛选、论文及资源链接，以及 BibTeX 弹窗。

## 本地预览

无需安装依赖或编译。在本目录运行：

```sh
python3 -m http.server 8000
```

打开 <http://localhost:8000>。

## 发布到 GitHub Pages

1. 创建 GitHub 仓库。个人根主页使用 `你的用户名.github.io`；普通仓库（如 `homepage`）的网页会位于 `/homepage/`。
2. 将本目录全部文件上传到仓库 `main` 分支，包含 `.github/workflows/pages.yml` 和 `.nojekyll`。
3. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
4. 在 **Actions → Deploy GitHub Pages** 查看部署；必要时点击 **Run workflow** 手动触发。

部署完成后，Pages 设置页会显示访问地址。后续更新 `main` 分支会自动重新发布。

也可以将 Pages 的 Source 设为 **Deploy from a branch**，选择 `main` 和 `/(root)`，直接发布静态文件。

## 内容维护

- `index.html`：全部页面内容和 BibTeX。
- `assets/styles/style.css`：原站主题。
- `assets/styles/github-pages.css`：静态迁移和移动端兼容调整。
- `assets/js/github-pages.js`：栏目地址、浏览器前进后退及年份筛选。
- `assets/images/minlie-huang.jpg`：头像。
- `assets/img/image_header.jpg`：页头背景。

网站运行所需的图片、样式、脚本和字体均已保存在本仓库，使用相对路径，兼容根域主页和项目主页。论文 PDF、报告幻灯片、数据集及外部网站链接保留原地址；这些下载资源未全部镜像，仍依赖对应服务器。

原主题的作者注释和第三方脚本声明保留。
