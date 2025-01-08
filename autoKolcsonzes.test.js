import{test, expect} from 'vitest'

import{SzamitKoltseget} from './autoKolcsonzes.js'

//Losonczi Marcell//

test('gazdaságos, nincs biztositas, 5 nap',()=>{
    const costumer1=new SzamitKoltseget(5, "gazdaságos", false, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(15000);
})

test('gazdaságos, van biztositas, 5 nap',()=>{
    const costumer1=new SzamitKoltseget(5, "gazdaságos", true, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(20000);
})

test('gazdaságos, nincs biztositas, 10 nap',()=>{
    const costumer1=new SzamitKoltseget(10, "gazdaságos", false, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(27000);
})

test('gazdaságos, van biztositas, 10 nap',()=>{
    const costumer1=new SzamitKoltseget(10, "gazdaságos", true, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(36000);
})


test('családi, nincs biztositas, 5 nap',()=>{
    const costumer1=new SzamitKoltseget(5, "családi", false, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(25000);
})

test('családi, van biztositas, 5 nap',()=>{
    const costumer1=new SzamitKoltseget(5, "családi", true, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(30000);
})

test('családi, nincs biztositas, 10 nap',()=>{
    const costumer1=new SzamitKoltseget(10, "családi", false, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(45000);
})

test('családi, van biztositas, 10 nap',()=>{
    const costumer1=new SzamitKoltseget(10, "családi", true, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(54000);
})


test('luxus, nincs biztositas, 5 nap',()=>{
    const costumer1=new SzamitKoltseget(5, "luxus", false, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(50000);
})

test('luxus, van biztositas, 5 nap',()=>{
    const costumer1=new SzamitKoltseget(5, "luxus", true, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(55000);
})

test('luxus, nincs biztositas, 10 nap',()=>{
    const costumer1=new SzamitKoltseget(10, "luxus", false, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(90000);
})

test('luxus, van biztositas, 10 nap',()=>{
    const costumer1=new SzamitKoltseget(10, "luxus", true, 0);
    costumer1.fizetes();
    expect(costumer1.koltseg).toBe(99000);
})