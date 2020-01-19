import { getCurrencies } from "./getCurrencies";


describe("getCurrencies", () => {
    it("should contain USD,CNY,EUR", () => {
        const result = getCurrencies();
        expect(result).toContain("USD");
        expect(result).toContain("CNY");
        expect(result).toContain("EUR");

    })

})

