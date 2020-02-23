import { Car} from './Cars'
import {expect,assert} from "chai";

describe("testing",()=>{
    it("test for car milage function,",()=>{
        let obj=new Car("Alto",1000)
        assert.equal(obj.getMilage(100),10)


    })
    it("testing add function",()=>{
        let obj=new Car("Alto",1000)
        expect(obj.add(1,2)).to.equals(3)
    })
})
