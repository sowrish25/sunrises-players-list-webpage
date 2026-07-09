// Player data
const history = {

warner:
"David Warner is the greatest player in Sunrisers Hyderabad history. He led SRH to their first IPL title in 2016 and won the Orange Cap three times. He scored over 4000 runs for SRH and is the franchise's highest run scorer.",

kane:
"Kane Williamson captained SRH to the IPL 2018 Final. He won the Orange Cap in 2018 with 735 runs and is known for his calm leadership and elegant batting.",

bhuvi:
"Bhuvneshwar Kumar is SRH's highest wicket taker. He won the Purple Cap in 2016 and 2017 and played a major role in SRH's IPL 2016 championship.",

dhawan:
"Shikhar Dhawan was one of SRH's best opening batsmen. He scored over 2500 runs for the franchise and was part of the 2016 title-winning team.",

yuvraj:
"Yuvraj Singh joined SRH in 2016 and played an important role in helping the team win their first IPL trophy.",

manish:
"Manish Pandey played for SRH from 2018. He scored several match-winning innings in the middle order.",

cutting:
"Ben Cutting played a few seasons for SRH as a powerful all-rounder and contributed with both bat and ball.",

bairstow:
"Jonny Bairstow formed one of the most dangerous opening partnerships with David Warner during IPL 2019 and 2020.",

rashid:
"Rashid Khan was one of SRH's biggest match winners. His leg-spin troubled batsmen worldwide and he also played explosive cameos with the bat.",

markram:
"Aiden Markram captained SRH during IPL 2023. He is a dependable middle-order batsman from South Africa.",

nabi:
"Mohammad Nabi was SRH's first overseas all-rounder and contributed with economical bowling and useful batting.",

shakib:
"Shakib Al Hasan represented SRH for several seasons and provided valuable all-round performances.",

sunder:
"Washington Sundar joined SRH in 2022. He is known for economical spin bowling and lower-order batting.",

jansen:
"Marco Jansen is a tall South African fast-bowling all-rounder who impressed with swing bowling for SRH.",

cummins:
"Pat Cummins became SRH captain in IPL 2024. Under his leadership SRH reached the IPL 2024 Final and played an aggressive brand of cricket.",

abhishek:
"Abhishek Sharma developed into one of the most explosive Indian openers for SRH and played several match-winning innings.",

head:
"Travis Head joined SRH in IPL 2024 and became one of the most destructive openers with his fearless batting.",

klaasen:
"Heinrich Klaasen is regarded as one of the world's best T20 wicketkeeper-batsmen. He has played many explosive innings for SRH.",

nitish:
"Nitish Kumar Reddy emerged as one of SRH's brightest young all-rounders with impressive batting and medium pace.",

aniket:
"Aniket Verma is a young batter who represents the next generation of SRH talent.",

ishan:
"Ishan Kishan joined SRH as an aggressive wicketkeeper-batsman and strengthened the top order.",

kamindu:
"Kamindu Mendis is a Sri Lankan all-rounder famous for his ability to bowl with both arms and contribute with the bat.",

harshal:
"Harshal Patel is a wicket-taking fast bowler known for slower balls and death-over bowling.",

unadkat:
"Jaydev Unadkat is an experienced left-arm fast bowler who has represented several IPL franchises including SRH."

};

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function () {

        const id = this.id;

        alert(history[id]);

    });

});