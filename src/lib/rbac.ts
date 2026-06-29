import type { Role } from "@prisma/client";

/**
 * Role hierarchy — higher number inherits the permissions of all lower roles.
 */
export const ROLE_LEVEL: Record<Role, number> = {
  PATIENT: 0,
  CLINIC_STAFF: 1,
  DOCTOR: 1,
  PARTNER: 2,
  REGIONAL_ADMIN: 3,
  COUNTRY_ADMIN: 4,
  SUPER_ADMIN: 5,
};

export function hasAtLeast(role: Role, minimum: Role): boolean {
  return ROLE_LEVEL[role] >= ROLE_LEVEL[minimum];
}

export const ADMIN_ROLES: Role[] = [
  "REGIONAL_ADMIN",
  "COUNTRY_ADMIN",
  "SUPER_ADMIN",
];

export function isAdmin(role?: Role | null): boolean {
  return !!role && ADMIN_ROLES.includes(role);
}

/** Map a role to the portal it should land on after sign-in. */
export function homeForRole(role: Role): string {
  if (isAdmin(role)) return "/admin";
  if (role === "PARTNER" || role === "CLINIC_STAFF" || role === "DOCTOR")
    return "/partner";
  return "/portal";
}
