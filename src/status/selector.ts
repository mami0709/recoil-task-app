import { selector } from 'recoil';
import { todoListState } from './atom';


export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState); //todoListにtodoListStateを保存。
    const totalNum = todoList.length; //lengthで配列の大きさを取得して戻す
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length; //isCompleteプロパティがtrueの完了済みのitemのみ取得してlengthで配列の大きさを計算
    const totalUncompletedNum = totalNum - totalCompletedNum; //totalNumからtotalCompletedNumを引いて未完了のitemの数を取得
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});