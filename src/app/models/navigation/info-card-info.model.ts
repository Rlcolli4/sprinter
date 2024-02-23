export enum InfoCardType {
  TEAMS = 1,
  PROJECTS = 2
}
export interface InfoCardInfo {
  id: number,
  title: string,
  subtitle: string,
  type: InfoCardType
}