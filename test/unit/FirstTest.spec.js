function sumOfThreeNumbers(num1, num2, num3) {
	return num1 + num2 + num3;
}
describe('Checking Sum of Givern Numbers',() =>{
	it('when we give three number it should return addition is equal to given number',() =>{
		var numbers = [100,150,250];
		var result = sumOfThreeNumbers(...numbers);
		expect(result).toEqual(500);
	});
});