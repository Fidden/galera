import {Button} from '@/components/ui/button/button.tsx';
import {Input} from '@/components/ui/input/input.tsx';
import {Label} from '@/components/ui/label/label.tsx';
import {Textarea} from '@/components/ui/textarea/textarea.tsx';
import {cnIndexScreen} from '@/screens/index-screen/index-screen.const.ts';
import {useState} from "preact/hooks";

export function IndexScreenContacts() {
    const [sent, setSent] = useState(false);

    const handleFormSubmit = (event: Omit<SubmitEvent, "currentTarget"> & {
        readonly currentTarget: HTMLFormElement
    }) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch(`http://nginx/api/mail`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => setSent(true))
    }

    return (
        <section className={cnIndexScreen('contacts')} id={'contacts'}>
            <article className={cnIndexScreen('contacts-info')}>
                <h2 className={cnIndexScreen('contacts-heading')} style={{paddingBottom: 0}}>
                    Контакты
                </h2>
                <a
                    className={cnIndexScreen('contacts-phone')}
                    href="tel:+7(495)796-58-98"
                >
                    +7(495)796-58-98
                </a>
                <a
                    className={cnIndexScreen('contacts-email')}
                    href="mailto:otk@1st-choco.ru"
                >
                    otk@1st-choco.ru
                </a>
                <a href="https://yandex.ru/maps/-/CHaq7ZPF" target={'_blank'} rel="noreferrer">
                    <address>
                        141150, Московская область,<br/>
                        г. Лосино-Петровский,<br/>
                        ул. Первомайская, д. 1, стр. 16
                    </address>
                </a>
            </article>
            <article className={cnIndexScreen('contacts-form')}>
                <h2 className={cnIndexScreen('contacts-heading')}>
                    Свяжитесь с нами
                </h2>
                <form
                    onSubmit={(e) => handleFormSubmit(e)}
                    className={cnIndexScreen('contacts-body')}
                >
                    <div className={cnIndexScreen('contacts-col')}>
                        <Label
                            text={'Как вас зовут?'}
                            required={true}
                        >
                            <Input
                                name={'name'}
                                type={'text'}
                                placeholder={'Иван Иванович'}
                                required={true}
                            />
                        </Label>
                        <Label
                            text={'Номер телефона'}
                            required={true}
                        >
                            <Input
                                name={'phone'}
                                type={'tel'}
                                placeholder={'+7 (---) --- -- --'}
                                required={true}
                            />
                        </Label>
                        <Label text={'Email'}>
                            <Input
                                name={'email'}
                                type={'email'}
                                placeholder={'example@mail.ru'}
                            />
                        </Label>
                        <Label text={'Откуда вы?'}>
                            <Input
                                name={'address'}
                                type={'text'}
                                placeholder={'Регион, город '}
                            />
                        </Label>
                    </div>
                    <div className={cnIndexScreen('contacts-col')}>
                        <Label text={'О чём ваше письмо?'}>
                            <Input
                                name={'title'}
                                type={'text'}
                                placeholder={'Тема обращения'}
                            />
                        </Label>
                        <Label
                            style={{height: '100%'}}
                            text={'Текст обращения'}
                        >
                            <Textarea
                                name={'text'}
                                style={{flex: '1', resize: 'none'}}
                                placeholder={'Пишите, а мы ответим Вам...'}
                            />
                        </Label>
                        <Button
                            type={'submit'}
                            disabled={sent}
                        >
                            {sent ? 'Отправлено' : 'Отправить'}
                        </Button>
                    </div>
                </form>
            </article>
        </section>
    );
}
