export interface Card {
    value: number;
    colour: string;
    imageUrl: string;
}

export interface Player {
    index: number;
    cards: Card[]
}

export class UnoDeck {

    private cards: Card[] = [];
    private static COLOURS: string[] = ["red", "green", "blue", "yellow"];

    constructor() {
        //Create main deck
        for (var c = 0; c < UnoDeck.COLOURS.length; c++) {
            this.cards.push({
                value: 0,
                colour: UnoDeck.COLOURS[c],
                imageUrl: "/assets/uno_deck/c" + c + "_00.png"
            })
        }

        for (let i = 0; i < 4; i++) {
            this.cards.push({
                value: 13,
                colour: "wild",
                imageUrl: "/assets/uno_deck/c4_00.png"
            })

            this.cards.push({
                value: 14,
                colour: "+4",
                imageUrl: "/assets/uno_deck/c4_01.png"
            })
        }

        for (let i = 0; i < 2; i++) {
            for (var c = 0; c < UnoDeck.COLOURS.length; c++) {
                for (let j = 0; j < 12; j++) {
                    let prefix: string = "0";
                    
                    if (j < 10) {
                        prefix = prefix + j;
                    }
                    else
                        prefix = j + "";

                    this.cards.push({
                        value: j + 1,
                        colour: UnoDeck.COLOURS[c],
                        imageUrl: "assets/uno_deck/c" + c + "_" + prefix + ".png"
                    })
                }
            }
        }
        this.shuffle(5);
    }

    private shuffle(times: number): void {
        function getRandomCard(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        for (let i = 0; i < times; i++) {
            for (let j = 0; j < this.cards.length; j++) {

                var p1: number = j;
                var p2: number = getRandomCard(1, this.cards.length - 1);

                var c: Card = this.cards[p1];
                this.cards[p1] = this.cards[p2];
                this.cards[p2] = c;
            }
        }
    }

    public take(): Card {
        return (this.cards.pop());
    }
}