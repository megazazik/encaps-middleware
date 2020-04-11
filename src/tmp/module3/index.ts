import { addSelect, Configs } from '../..';
import { model3, State3 } from './model';
import { Model3Assistant } from './assistant';
import { Model1Assistant } from '../module1';
import { Model2Assistant } from '../module2';

export { model3 };

export const assistants: Configs<State3> = [
	Model3Assistant,
	addSelect('model2', Model2Assistant),
	addSelect('model2', Model1Assistant),
];

const t = addSelect('model2', {
	Constructor: Model1Assistant,
	select: ({ model2 }) => model2,
});
