import React from 'react';
import MyButton from "../../UI/button/MyButton";

const Training = () => {
    return (
        <div className="training">
            <div className="tr__header">
                <h2 className="tr__header_title">Узнай, как печатать вслепую</h2>
                <div className="tr__header_subtitle">
                    Главная идея слепой печати в том, что за каждым пальцем закреплена своя зона клавиш. Это позволяет
                    печатать не глядя на клавиатуру. Регулярно тренируйся и, благодаря мышечной памяти, все твои десять
                    пальцев будут знать, куда нажать.
                </div>
            </div>

            <div className="tr_position">
                <div className="tr_position_cover">
                    <h2 className="tr_position_title">Поза при печати текста</h2>

                    <ul className="tr_position_subtitle">
                        <li>Сиди ровно и держи спину прямой.</li>
                        <li>Локти держи согнутыми под прямым углом.</li>
                        <li>Голова должна быть немного наклонена вперед.</li>
                        <li>Расстояние от глаз до экрана должно быть 45-70 см.</li>
                        <li>Расслабь мышцы плеч, рук и кистей. Кисти могут немного касаться стола в нижней части
                            клавиатуры,
                            но не переноси
                            вес тела на руки, чтобы не перенапрягать кисти.
                        </li>
                    </ul>
                </div>
                <div className="tr_position_img">
                    <img
                        src="https://ph0en1x.net/uploads/Image/news/eyes-saving/user-to-monitor-right-distance-seating.jpg"/>

                </div>
            </div>

            <div className="tr_position_start">
                <h2 className="start_title">Исходная позиция</h2>
                <div className="position_start">
                    <img src="https://www.ratatype.ru/static/i/learn/keyboard/ru/main_keys.png"/>
                    <div className="start_txt">
                    <div>Немного согни пальцы и положи их на клавиши ФЫВА и ОЛДЖ, которые находятся в среднем ряду. Эта
                        строка называется ОСНОВНОЙ СТРОКОЙ, потому что ты всегда будешь начинать с этих клавиш и
                        возвращаться к ним.</div>

                    <div> На клавишах А и О, под указательными пальцами, находятся небольшие выступы. Они позволяют
                        ориентироваться на клавиатуре вслепую</div>
                </div>
                </div>
            </div>

            <div className="tr_keyboard">
                <h2 className="keyboard_title">Схема клавиатуры</h2>
                <div className="tr_keyboard_info">
                    <img
                        src="https://иванов-ам.рф/informatika_07_68_pol/ur_21/pravilnoe-polozhenie-ruk-na-klaviature-0-3.jpg"/>
                    <h3>Цвет клавиш на этой клавиатуре поможет тебе понять и запомнить, каким пальцем на какую клавишу
                        нужно нажимать.</h3>
                    <ul className="keyboard_subtitle">
                        <li>Нажимай клавиши только тем пальцем, который для них предназначен.</li>
                        <li>Всегда возвращай пальцы в исходную позицию «ФЫВА – ОЛДЖ»</li>
                        <li>Когда набираешь текст, представляй расположение клавиш.</li>
                        <li>Установи ритм и соблюдай его, пока печатаешь. Нажимай на клавиши с одинаковым интервалом.
                        </li>
                        <li>Клавишу SHIFT всегда нажимает мизинец с противоположной стороны от нужной буквы.</li>
                        <li>Пробел отбивай большим пальцем левой или правой руки, как тебе удобнее.
                        </li>
                    </ul>
                    <h3>Сначала такой метод печати может показаться неудобным. Но не останавливайся. Со временем все
                        будет получаться быстро, легко и удобно. Чтобы добиться максимального результата, выбирай курс
                        слепой печати для твоей раскладки клавиатуры и на нужном языке.</h3>
                </div>
            </div>

            <div className="tr_fingers">
                <h2 className="fingers_title">Движение пальцев</h2>
                <div className="fingers_info">
                    <div className="fingers_txt">Не подглядывай на клавиатуру во время печати. Просто скользи пальцами по клавишам, пока не
                        найдешь основную строку.

                        Ограничь движение кистей и пальцев до минимума, только чтобы нажимать нужные клавиши. Держи руки и
                        пальцы как можно ближе к исходной позиции. Это увеличит скорость набора текста и снизит нагрузку на
                        кисти.

                        Следи за безымянными пальцами и мизинцами, так как они часто остаются незадействованными.
                    </div>
                    <img
                        src="https://media.istockphoto.com/vectors/cute-cartoon-face-scandinavian-print-or-poster-design-vector-id1054898538?k=20&m=1054898538&s=612x612&w=0&h=1pvvk_CndTKWGVqB7JEkehl94n5KZTucIwN893dbAZM="/>
                </div>
            </div>
            <div className="tr_save">
                <h2 className="save_title">Береги себя</h2>
                <div className="save_subtitle">Сделай паузу, если чувствуешь, что сбиваешься и делаешь много ошибок. Небольшой перерыв вернет силы и внимательность.</div>
            </div>

            <div className="tr_btn">
                <MyButton>Тренировка</MyButton>
            </div>


        </div>
    );
};

export default Training;