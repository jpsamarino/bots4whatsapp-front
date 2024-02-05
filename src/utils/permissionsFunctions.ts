// userPermissions empty have all access

export function isAllowAcess(
  requirementsPermissions?: string[],
  userPermissions?: string[] | null
) {
  if (
    requirementsPermissions == undefined ||
    requirementsPermissions.length == 0
  ) {
    return true; // there is no requirements
  }
  if (userPermissions == null || userPermissions == undefined) {
    return false;
  }
  if (userPermissions.length == 0) {
    return true; // userPermissions empty have all access
  }
  for (const requirementPermission of requirementsPermissions) {
    if (!userPermissions.includes(requirementPermission)) {
      return false;
    }
  }
  return true;
}
