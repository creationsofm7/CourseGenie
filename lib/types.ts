import { Prisma } from '@prisma/client';

// Export types from Prisma schema
export type Course = Prisma.CourseGetPayload<{}>;
export type Module = Prisma.ModuleGetPayload<{}>;
export type Lesson = Prisma.LessonGetPayload<{}>;
export type User = Prisma.UserGetPayload<{}>;
