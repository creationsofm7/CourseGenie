import { Prisma } from '@prisma/client';

// Export types from Prisma schema
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
export type Course = Prisma.CourseGetPayload<{}>;
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
export type Module = Prisma.ModuleGetPayload<{}>;
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
export type Lesson = Prisma.LessonGetPayload<{}>;
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
export type User = Prisma.UserGetPayload<{}>;
