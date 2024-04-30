import { addDays } from "date-fns/addDays";
import { addDays as addDaysJal } from "date-fns-jalali/addDays";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalaliV3';

console.log(module.children.slice(0, 4).map(f => f.filename.replace('/home/seyyed/project/my-github/date-fns-project/', '')))
// console.log(module.children.map(f => f.filename))
console.log(module.id)

describe('chert', () => {
    it('should work', () => {
        console.log("----------------- chert -----------------")
        console.log(addDays(new Date(), 1))
        console.log(addDaysJal(new Date(), 1))
        console.log(AdapterDateFns)
        console.log(AdapterDateFnsJalali)
        expect(true).toBe(true);
    });
});