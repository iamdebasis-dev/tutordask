This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


2295  npx create-next-app@latest posts-app --yes
 2296  cd posts-app
 2297  npx shadcn@latest init
 2298  history
 2299  npm install prisma @prisma/client @prisma/adapter-pg pg next-themes date-fns zod lucide-react 
 2300  npm install -D prisma
 2301  npm install @prisma/client @prisma/adapter-pg pg lucide-react
 2302  npx prisma init
 2303  code .
 2304  npx prisma format
 2305  nvm list
 2306  nvm use v22.20.0
 2307  npx prisma format
 2308  clear
 2309  npx prisma format
 2310  cler
 2311  clear
 2312  npx prisma migrate dev
 2313  npx prisma generate
 2314  npm run dev
 2315  npx shadcn@latest add card
 2316  npx shadcn@latest add Button Input
 2317  npx shadcn@latest add button input label
 2318  npm run dev
 2319  npm install better-auth
 2320  npx @better-auth/cli@latest generate
 2321  npx prisma migrate dev
 2322  npm run dev
 2323  npx prisma generate
 2324  openssl rand -base64 32
 2325  npm run dev

 TutorDesk App
│
├── Users
│   ├── Register Student
│   ├── Login
│   ├── View Profile
│   └── Logout
│
├── Courses
│   ├── View All Courses
│   ├── Course Details
│   └── Create Course (Tutor)
│
├── Enrollment
│   ├── Enroll Course
│   ├── View Enrolled Courses
│   └── Cancel Enrollment
│
├── Sessions (Classes)
│   ├── View Sessions
│   ├── Join Live Class
│   └── Attendance
│
├── Payments
│   ├── Pay for Course
│   ├── View Payments
│   └── Download Receipt
│
├── Quiz
│   ├── Attempt Quiz
│   ├── View Results
│   └── Submit Answers
│
└── Tutor (Admin)
    ├── Create Course
    ├── Manage Courses
    ├── View Students
    ├── Approve Enrollments
    └── Manage Sessions





    app
│
├── (auth)
│   ├── login
│   │   └── page.tsx
│   ├── signup
│   │   └── page.tsx
│
├── courses
│   ├── page.tsx                // All courses
│   └── [id]
│       └── page.tsx           // Course details
│
├── enrollment
│   └── page.tsx               // My enrolled courses
│
├── sessions
│   └── page.tsx               // Class sessions
│
├── payments
│   └── page.tsx
│
├── quiz
│   ├── page.tsx
│   └── [id]
│       └── page.tsx
│
├── dashboard
│   └── page.tsx               // Student dashboard
│
├── tutor
│   ├── dashboard
│   │   └── page.tsx
│   ├── courses
│   │   ├── page.tsx
│   │   └── new
│   │       └── page.tsx
│   └── sessions
│       └── page.tsx
│
└── api
    ├── auth
    ├── courses
    ├── enrollment
    ├── payments
    └── quiz





    components
│
├── CourseCard.tsx
├── EnrollmentButton.tsx
├── SessionCard.tsx
├── QuizForm.tsx
├── PaymentButton.tsx
└── Navbar.tsx





User
│
├── id
├── name
├── email
├── password
└── role (STUDENT / TUTOR)

Course
│
├── id
├── title
├── subject
├── price
├── status
└── tutorId

Enrollment
│
├── id
├── userId
├── courseId
└── status

Session
│
├── id
├── courseId
├── date
└── status



Payment
│
├── id
├── userId
├── courseId
├── amount
└── status

Quiz
│
├── id
├── courseId
├── title
└── totalMarks

Result
│
├── id
├── userId
├── quizId
└── score



🔄 Main Flow (Hotel App style)
Student
 ↓
View Courses
 ↓
Click Course Details
 ↓
Enroll Course
 ↓
(If Paid → Payment)
 ↓
Enrollment Saved
 ↓
Join Live Class
 ↓
Attend Sessions
 ↓
Give Quiz
 ↓
See Results


🧑‍🏫 Tutor Flow
Tutor
 ↓
Login
 ↓
Create Course
 ↓
Publish Course
 ↓
Students Enroll
 ↓
Start Live Class
 ↓
Take Attendance
 ↓
Create Quiz
 ↓
View Results



app/
│
├── (auth)
│   ├── login/page.tsx
│   ├── signup/page.tsx
│
├── page.tsx                  ← Landing Page (Image 1)
│
├── courses/
│   ├── page.tsx              ← Browse courses
│   └── [id]/page.tsx
│
├── dashboard/page.tsx        ← Student dashboard
│
├── tutor/
│   ├── dashboard/page.tsx    ← Image 2
│   ├── courses/page.tsx      ← Image 3
│   ├── students/page.tsx     ← Image 4
│
├── api/
│   ├── auth/
│   │   ├── register/route.ts
│   │   ├── login/route.ts
│   │
│   ├── courses/
│   │   ├── route.ts          ← GET, POST
│   │   └── [id]/route.ts     ← GET, PUT, DELETE
│   │
│   ├── enrollment/
│   │   ├── route.ts
│   │   └── approve/route.ts
│   │
│   ├── users/
│   │   └── route.ts
│
lib/
├── prisma.ts

components/
├── Navbar.tsx
├── CourseCard.tsx
├── StatsCard.tsx
├── SessionCard.tsx