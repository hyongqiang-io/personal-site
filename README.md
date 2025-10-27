# 个人主页（GitHub Pages）

本仓库包含一个简洁的静态个人主页，已内置中文结构与样式，并链接根目录下的 `Resume_Template_for_CV_PhD.pdf` 简历文件。

## 本地预览

直接用浏览器打开 `index.html` 即可本地查看。

## 部署到 GitHub Pages（两种方式）

### 方式一：用户主页（username.github.io）
1. 在 GitHub 上新建仓库，名称必须为：`你的用户名.github.io`（如：`alice.github.io`）。
2. 在本地执行：
   ```bash
   git init
   git add .
   git commit -m "init site"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
   git push -u origin main
   ```
3. 约 1 分钟后访问：`https://<你的用户名>.github.io`。

### 方式二：项目主页（任意仓库名）
1. 在 GitHub 上新建任意名称的仓库（如：`personal_site`）。
2. 在本地执行：
   ```bash
   git init
   git add .
   git commit -m "init site"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/personal_site.git
   git push -u origin main
   ```
3. 打开仓库 Settings → Pages：
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main`，文件夹选择 `/ (root)`
   - 保存后等待 1 分钟，访问 GitHub Pages 提供的链接。

## 自定义
- 将 `index.html` 中的姓名、头衔、联系方式替换为你的信息。
- 在 `publications`、`projects` 等区块添加你的论文和项目链接。
- 简历下载按钮已指向根目录的 `Resume_Template_for_CV_PhD.pdf`，若你更换文件名，请同步更新链接。

## 可选：自定义域名
- 在仓库根目录添加 `CNAME` 文件，内容仅为你的域名（如：`example.com`）。
- 在域名 DNS 中设置 A/AAAA 或 CNAME 指向 GitHub Pages 官方 IP/域名（详见 GitHub 文档）。

---

如需进一步美化页面或添加多语言、深色/浅色主题切换等功能，欢迎提出需求。
