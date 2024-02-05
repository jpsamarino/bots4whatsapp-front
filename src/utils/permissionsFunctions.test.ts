import { describe, expect, test } from "@jest/globals";
import { isAllowAcess } from "./permissionsFunctions";

describe("test is function isAllowAcess", () => {
  test("when userPermissions is empty allways is allowed", () => {
    const userPermissions: string[] = [];
    const requirementPermission = ["root"];
    const isAllow = isAllowAcess(requirementPermission, userPermissions);
    expect(isAllow).toBe(true);
  });
  test("when requirementPermission is empty allways is allowed", () => {
    const userPermissions: string[] = ["root"];
    const requirementPermission: string[] = [];
    const isAllow = isAllowAcess(requirementPermission, userPermissions);
    expect(isAllow).toBe(true);
  });
  test("when userPermissions not match with requirementPermission return false", () => {
    const userPermissions: string[] = ["randon"];
    const requirementPermission = ["root"];
    const isAllow = isAllowAcess(requirementPermission, userPermissions);
    expect(isAllow).toBe(false);
  });
  test("when userPermissions not have all requirementPermission return false", () => {
    const userPermissions: string[] = ["a1"];
    const requirementPermission = ["a1", "b1"];
    const isAllow = isAllowAcess(requirementPermission, userPermissions);
    expect(isAllow).toBe(false);
  });
  test("when userPermissions have all requirementPermission return true", () => {
    const userPermissions: string[] = ["a1", "b1"];
    const requirementPermission = ["a1", "b1"];
    const isAllow = isAllowAcess(requirementPermission, userPermissions);
    expect(isAllow).toBe(true);
  });
  test("when userPermissions have all requirementPermission and plus return true", () => {
    const userPermissions: string[] = ["a1", "b1", "plus"];
    const requirementPermission = ["a1", "b1"];
    const isAllow = isAllowAcess(requirementPermission, userPermissions);
    expect(isAllow).toBe(true);
  });
  test("when userPermissions is undefined and requirementPermission is [] return true", () => {
    const userPermissions = undefined;
    const requirementPermission: string[] = [];
    const isAllow = isAllowAcess(requirementPermission, userPermissions);
    expect(isAllow).toBe(true);
  });
});
