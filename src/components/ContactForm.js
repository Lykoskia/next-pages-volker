import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import { useDarkMode } from '@/contexts/DarkModeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validateName = (name) => {
    return /^[a-zA-Z ]+$/.test(name);
}

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {

    const [translations, setTranslations] = useState({});
    const { locale } = useRouter();
    const { darkMode } = useDarkMode();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
    });

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const translations = await import(`../../locales/${locale}/translation.json`);
                setTranslations(translations.default);
            } catch (e) {
                console.error("Failed to load translations", e);
            }
        };

        loadTranslations();
    }, [locale]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.name.trim() === '') {
            toast.error(translations['nameError'] || 'Please enter your name.');
            return;
        }
        if (formData.email.trim() === '') {
            toast.error(translations['emailError'] || 'Please enter your email.');
            return;
        }
        if (formData.comment.trim() === '') {
            toast.error(translations['messageError'] || 'Please enter your message.');
            return;
        }
    
        if (!validateName(formData.name)) {
            toast.error(translations['invalidNameError'] || 'Invalid name.');
            return;
        }
        if (!validateEmail(formData.email)) {
            toast.error(translations['invalidEmailError'] || 'Invalid email.');
            return;
        }
    
        const emailData = {
            to_name: 'Jean-Jacques',
            from_name: formData.name,
            message: formData.comment,
            reply_to: formData.email
        };
    
        try {
            const response = await emailjs.send('service_nlnvio8', 'template_qg3q9q4', emailData, 'h2cuhtuPLAkPtLab3');
            toast.success(translations['messageSuccess'] || 'Message sent successfully.');
        } catch (error) {
            console.error('Failed to send email: ', error);
            toast.error(translations['sendError'] || 'Failed to send message.');
        }
    };

    return (
        <React.Fragment>
            <ToastContainer position="bottom-right" autoClose={10000} theme={darkMode ? "dark" : "light"} />
            <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-slate-900 ring-2 ring-red-700 dark:ring-sky-700 shadow-md shadow-red-700 dark:shadow-sky-700 max-w-lg mx-auto p-8 my-8">
                <label htmlFor="name" className="block text-xl font-bold text-gray-900 dark:text-sky-200 mb-2">{translations['yourName']}</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border-2 text-red-700 dark:text-sky-700 border-red-200 dark:border-sky-500 hover:border-green-700 rounded"
                    placeholder={translations['yourName']}
                />

                <label htmlFor="email" className="block text-xl font-bold text-gray-900 dark:text-sky-200 mb-2">{translations['yourEmail']}</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border-2 text-red-700 dark:text-sky-700 border-red-200 dark:border-sky-500 hover:border-green-700 rounded"
                    placeholder={translations['yourEmail']}
                />

                <label htmlFor="comment" className="block text-xl font-bold text-gray-900 dark:text-sky-200 mb-2">{translations['yourMessage']}</label>
                <textarea
                    name="comment"
                    id="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className="w-full p-2 mb-6 border-2 text-red-700 dark:text-sky-700 border-red-200 dark:border-sky-500 hover:border-green-700 rounded"
                    placeholder={translations['yourMessage']}
                    rows="4"
                ></textarea>

                <div className="text-center">
                    <button
                        type="submit"
                        className="success-button hover:bg-green-800"
                    >
                        {translations['sendButton']}
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};
