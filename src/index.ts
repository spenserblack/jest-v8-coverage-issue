export type Answer = 'yes' | 'no';

export default function asBool(answer: Answer): boolean {
  switch(answer) {
    case 'yes':
      return true;
    case 'no':
      return false;
    /* istanbul ignore next */
    /* c8 ignore next 2 */
    default:
      throw new Error('unreachable');
  }
}
