# 🚀 Frontend II Project - Environment Setup

This repository contains the initial configuration required for our projects. We will use a professional workflow that includes static code analysis, automatic formatting, and mandatory unit testing.

## 🛠️ Tools Used
- **ESLint:** Linter to find and fix problems in your JavaScript code.
- **Prettier:** Code formatter to maintain a consistent style.
- **Vitest:** Unit testing framework (similar to Jest but faster).
- **Husky & Lint-staged (Local Pre-commit):** Tools to *automatically* validate code on your local machine before allowing a commit to be saved.
- **GitHub Actions:** Continuous Integration (CI) that automatically grades your Pull Requests.

## 📦 Installation Instructions

1. **Clone this repository** to your local machine:
   ```bash
   git clone <REPOSITORY_URL>
   cd <REPOSITORY_NAME>
   ```

2. **Install Node.js dependencies**:
   ```bash
   npm install
   ```

3. **Activate local Pre-commit**:
   To ensure code validations run on your computer before pushing any changes, initialize Husky by running:
   ```bash
   npm run prepare
   ```
   *Note: This will create a hidden `.husky` folder that intercepts your git commands to review the code.*

## 🚦 Mandatory Workflow

The `main` branch is protected by repository rules. **You cannot push directly to main.** You must follow this workflow for each task:

1. **Create a new branch** for your task or feature:
   ```bash
   git checkout -b feature/your-task-name
   ```

2. **Write your code and unit tests**.

3. **Manual Verification (Optional but recommended)**:
   Before committing, you can verify that everything is in order by running:
   - `npm run format` (To format your files)
   - `npm run lint` (To check for errors in your code)
   - `npm run test` (To run unit tests)

4. **Make your commit (Pre-commit intervention)**:
   ```bash
   git add .
   git commit -m "feat: add feature X"
   ```
   *🛑 Important! At this moment, Husky will pause the commit and run ESLint and Prettier locally only on the files you modified. If the code has syntax errors or bad formatting, the commit will be **rejected**. You must fix the errors and try committing again.*

5. **Push your changes**:
   ```bash
   git push origin feature/your-task-name
   ```

6. **Open a Pull Request (PR)** on GitHub towards the `main` branch. The "Grader" (GitHub Actions) will run all tests again in the cloud. If everything is green, you will be ready to Merge your work.