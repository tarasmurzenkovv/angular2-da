export class Status {
  public static OPEN = 'Open';
  public static DEVELOPMENT = 'Ready for development';
  public static READY_FOR_QA = 'Ready for QA';
  public static CLOSED = 'Closed';
}

export class Type {
  public static TECHNICAL_TASK = 'Technical Task';
  public static BUG = 'Bug';
  public static IMPROVEMENT = 'Improvement';
  public static FEATURE = 'Feature';
  public static TASK = 'Task';
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
   */
  constructor(public start: Date, public end: Date) {
  }
}

export class Project {
  constructor(public projectName: string) {
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
   */
  constructor(public taskName: string,
              public status: string,
              public type: string,
              public estimate: number,
              public range: TimeRange,
              public description: string) {
  }
}
