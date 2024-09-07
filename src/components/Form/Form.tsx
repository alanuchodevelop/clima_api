import {countries} from "../../data/countries.ts";
import styles from './Form.module.css';
import {ChangeEvent, FormEvent, useState} from "react";
import {SearchType} from "../../types";

function Form() {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(Object.values(search).includes('')) {
            console.log('campos vacios')
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input id="city"
                       name="city"
                       type="text"
                       placeholder="Ingresar ciudad"
                       value={search.city}
                       onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">Pais:</label>
                <select name="country"
                        id="country"
                        value={search.country}
                        onChange={handleChange}
                >
                    <option value="">--Seleccione un pais--</option>
                    {countries.map(country =>(
                        <option key={country.code} value={country.code}>{country.name}</option>
                    ) )}
                </select>
            </div>
            <input className={styles.submit} type="submit" value="Consultar clima"/>
        </form>
    );
}

export default Form;