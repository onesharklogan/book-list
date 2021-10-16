const booksList = require("./booksList")

// @ponicode
describe("searchChanged", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "George", "George"], ["Jean-Philippe", "George", "Pierre Edouard"], ["Edmond", "Michael", "Anas"]]
        inst = new booksList.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.searchChanged(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.searchChanged(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.searchChanged(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.searchChanged(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.searchChanged(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.searchChanged(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
