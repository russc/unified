import { timeDifference } from "@/lib/helpers";

const mockTime = (mins: number) => {
  const now = new Date();
  const then = new Date();

  // Subtract 59 minutes from the current time
  let pastTime = new Date(then.getTime() - mins * 60 * 1000);

  // Format the timestamp in the desired format
  let timestamp = pastTime.toISOString();

  console.log(timestamp);

  return timeDifference(timestamp, now);
};

describe("timeDifference", () => {
  it("returns 1 min", () => {
    const time = mockTime(1);

    expect(time).toEqual("1 min");
  });

  it("returns 59 mins", () => {
    const time = mockTime(59);

    expect(time).toEqual("59 mins");
  });

  it("returns 1 hour", () => {
    const time = mockTime(60);

    expect(time).toEqual("1 hour");
  });

  it("returns 23 hours", () => {
    const time = mockTime(1439);

    expect(time).toEqual("23 hours");
  });

  it("returns 1 day", () => {
    const time = mockTime(1440);

    expect(time).toEqual("1 day");
  });

  it("returns 2 day", () => {
    const time = mockTime(2880);

    expect(time).toEqual("2 days");
  });
});
