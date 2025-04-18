import { Prisma } from '@prisma/client';

// Export types from Prisma schema
// @typescript-eslint/no-empty-object-type
export type Course = Prisma.CourseGetPayload<{}>;
// @typescript-eslint/no-empty-object-type
export type Module = Prisma.ModuleGetPayload<{}>;
// @typescript-eslint/no-empty-object-type
export type Lesson = Prisma.LessonGetPayload<{}>;
// @typescript-eslint/no-empty-object-type
export type User = Prisma.UserGetPayload<{}>;
