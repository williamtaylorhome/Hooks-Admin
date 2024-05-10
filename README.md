# Hooks-Admin 🚀

### introduce 📖

🚀🚀🚀 Hooks Admin，Based on React18、React-Router v6、React-Hooks、Redux && Redux-Toolkit、TypeScript、Vite2、Ant-Design An open-source back-end management framework.

🌈 Redux-Toolkit Please switch to Redux-Toolkit branches

### Project-related documentation 📚

### 三、🔨🔨🔨 Project features

- 🚀 Adopt the latest technology to find development:React18、React-Router v6、React-Hooks、TypeScript、Vite2
- 🚀 Vite2 is used as a project development and packaging tool (Gzip packaging, cross-origin proxies, packaging preview tools...) ）
- 🚀 The whole project is integrated TypeScript
- 🚀 Use Redux for state management,integration immer、react-redux、redux-persist exploitation
- 🚀 Integrated with two sets of state management,master The branch is used redux || redux-toolkit  The branch uses redux-toolkit
- 🚀Use TypeScript to rewrap Axios (Error Interception, Common Request Encapsulation, Global Request Loading, Cancel Duplicate Requests...) ）
- 🚀 Support ANTD component size switching, dark > gray &> color weak mode, i18n internationalization (i18n does not configure all files for the time being)
- 🚀 Use custom high-level components to intercept routing permissions (403 pages) and configure page button permissions
- 🚀 Supports React-Router v6 routing lazy loading configuration, menu accordion mode, infinite menus, multi-tabs, breadcrumb navigation
- 🚀 Unified code formatting with Prettier, integrated Eslint, Stylelint code validation specifications (project specification configuration)
- 🚀 use husky、lint-staged、commitlint、commitizen、cz-git Specification Submission Information (Project Specification Configuration)

### Fourth, the installation and use steps 📑

- **Install：**

```text
npm install

# npm install
```

- **Run：**

```text
npm run dev
npm run serve
```

- **Build：**

```text
# Development environment
npm run build:dev

# Test environment
npm run build:test

# Production environment
npm run build:pro
```

- **Lint：**

```text
# eslint Detect the code
npm run lint:eslint

# prettier Format the code
npm run lint:prettier

# stylelint Formatting styles
lint:stylelint
```

- **commit：**

```text
# Submit the code（It will be automated lint:lint-staged command）
npm run commit
```

### 6. File resource directory 📚

```text
Hooks-Admin
├─ .vscode                # Vscode is recommended
├─ public                 # Static resource files (ignoring packaging)
├─ src
│  ├─ api                 # API Interface management
│  ├─ assets              # Static resource files
│  ├─ components          # Global components
│  ├─ config              # Global configuration items
│  ├─ enums               # Project enumeration
│  ├─ hooks               # commonly used Hooks
│  ├─ language            # Internationalization of the language
│  ├─ layouts             # Frame layout
│  ├─ routers             # Route management
│  ├─ redux               # redux store
│  ├─ styles              # Global styles
│  ├─ typings             # Ahi ts statement
│  ├─ utils               # Tool Library
│  ├─ views               # All pages of the project
│  ├─ App.tsx             # Entrance page
│  ├─ main.tsx            # Entry files
│  └─ env.d.ts            # vite Declaration file
├─ .editorconfig          # Editor Configuration (Formatting)
├─ .env                   # vite Common configurations
├─ .env.development       # Development environment configuration
├─ .env.production        # Production environment configuration
├─ .env.test              # Test environment configuration
├─ .eslintignore          # ignore Eslint verify
├─ .eslintrc.js           # Eslint Verify the configurationfy the configuration
├─ .gitignore             # git Commit ignore
├─ .prettierignore        # ignore prettier format
├─ .prettierrc.js         # prettier arrangement
├─ .stylelintignore       # ignore stylelint format
├─ .stylelintrc.js        # stylelint Style formatting configuration
├─ CHANGELOG.md           # Project changelog
├─ commitlint.config.js   # git Submit the specification configuration
├─ index.html             # entrance html
├─ LICENSE                # Open source protocol files
├─ lint-staged.config     # lint-staged Profiles
├─ package-lock.json      # Depends on the package version lock
├─ package.json           # Dependency package management
├─ postcss.config.js      # postcss arrangement
├─ README.md              # README introduce
├─ tsconfig.json          # typescript Global configuration
└─ vite.config.ts         # vite arrangement
```

### 7. Browser support

- It is recommended for local development Chrome
- The production environment supports modern browsers, and Internet Explorer is not supported, and more browsers can be viewed [Can I Use Es Module](https://caniuse.com/?search=ESModule)。

| ![IE](https://i.imgtg.com/2023/04/11/8z7ot.png) | ![Edge](https://i.imgtg.com/2023/04/11/8zr3p.png) | ![Firefox](https://i.imgtg.com/2023/04/11/8zKiU.png) | ![Chrome](https://i.imgtg.com/2023/04/11/8zNrx.png) | ![Safari](https://i.imgtg.com/2023/04/11/8zeGj.png) |
| :---------------------------------------------: | :-----------------------------------------------: | :--------------------------------------------------: | :-------------------------------------------------: | :-------------------------------------------------: |
|                   not support                   |                  last 2 versions                  |                   last 2 versions                    |                   last 2 versions                   |                   last 2 versions                   |

### 8. Project backend interface 🧩

The backend interface of the project is completely based on mock data, thanks to the following mock platform support:

- FastMock： <https://www.fastmock.site/>
- EasyMock：<https://mock.mengxuegu.com/>
