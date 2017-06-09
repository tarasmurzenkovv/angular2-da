export class Status {
  public static GATHERING_REQUIREMENTS = 'Gathering requirements';
  public static READY_FOR_DEV = 'Ready for development';
  public static DEV_IN_PROGRESS = 'Development in progress';
  public static READY_FOR_QA = 'Ready for QA';
  public static TESTING_IN_PROGRESS = 'Testing in progress';
  public static ACCEPTANCE = 'Ready for acceptance';
  public static ACCEPTED = 'Accepted';
  public static NOT_ACCEPTED = 'Not accepted';
}

export class Type {
  public static TECHNICAL_TASK = 'Technical Task';
  public static BUG = 'Bug';
  public static IMPROVEMENT = 'Improvement';
  public static FEATURE = 'Feature';
  public static TASK = 'Task';
}

class TimeRangeError extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 * Models the time range.
 * @author Taras Murzenkov
 */
export class TimeRange {

  /**
   * Models the time range.
   *
   * @param start start date of the range.
   * @param end end date of the range.
   * @throws TimeRangeError if the start date is greater than the end date.
   */
  constructor(public start: Date, public end: Date) {
    if (this.start.getTime() > this.end.getTime()) {
      throw new TimeRangeError('Cannot instantiate the range object. Start date is greater than end date');
    }
  }
}

/**
 * Models the simple task.
 * @author Taras Murzenkov
 */
export class Task {
  /**
   * Constructor.
   *
   * @param taskName task name
   * @param status task status
   * @param type task type
   * @param estimate task estimate
   * @param range time interval
   * @param description task description
   * @param person person for whom the task is assigned
   */
  constructor(public taskName: string,
              public status: string,
              public type: string,
              public estimate: number,
              public range: TimeRange,
              public description: string) {
  }
}
