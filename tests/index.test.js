import {
  URLSlug,
  hasPrefix,
  initials,
  monthName,
  twoDigitsNum,
  withTwoDecimals,
  removeDuplicates,
} from "../index";

describe("URLSlug", () => {
  test("Convert a paragraph to lowercase and replace the spaces with a dash", () => {
    expect(URLSlug("Hola que ase")).toBe("hola-que-ase");
  });
});

describe("initials", () => {
  test("Converts a separate full name initials points", () => {
    expect(initials("Manolo Pérez Canto")).toBe("M.P.C.");
  });
});

describe("monthName", () => {
  test("Take number month and return name", () => {
    expect(monthName(1)).toBe("february");
  });
  test("Take nmber month and return name only if minor that 11", () => {
    expect(monthName(12)).toBe("There are only 12 months!");
  });
});

describe("hasPrefix", () => {
  test("Check if the word starts with the letter ", () => {
    expect(hasPrefix("Hola", "H")).toBeTruthy();
  });
  test("Check if not the word starts with the letter ", () => {
    expect(hasPrefix("Hola", "P")).toBeFalsy();
  });
});

describe("withTwoDecimals", () => {
  test("Convert to rounded decimals", () => {
    expect(withTwoDecimals(25.9966)).toBe(26);
  });
});

describe("twoDigitsNum", () => {
  test("Convert to string whith 0", () => {
    expect(twoDigitsNum(1)).toBe("01");
  });
  test("Convert to string whith 0 only if bigest", () => {
    expect(twoDigitsNum(11)).toBe("11");
  });
});

describe("removeDuplicates", () => {
  test("Remove items duplicated on array", () => {
    expect(removeDuplicates([2, 3, 4, 2])).toEqual([2, 3, 4]);
  });
});
