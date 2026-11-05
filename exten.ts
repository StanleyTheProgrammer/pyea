
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="Light"
    Light,
    //% block="Heavy"
    Heavy
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace MicroDestroyer {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function DestroyMicroBit(e: MyEnum): void {
        if (e == MyEnum.Light) {
            for (let i = 1; i<= 10000000000000; i++)  {
                console.log("destroying... estimate time: 1hr")
            }
        } else {
            while (true) {
                console.log("destroyed. good luck :)")
                while (true) {
                    console.log("second layer destroying...")
                }
            }
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function test(value: number): number {
        return value <= 1 ? value : test(value -1) + test(value - 2);
    }
}