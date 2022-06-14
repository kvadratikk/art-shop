import { useState, SyntheticEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../types/Store';
import AppSlice from '../../store/reducers/AppSlice';

import './style.css';
import noPhoto from '../../assets/imgs/no-photo.jpg';

import IReviewCard from '../../interfaces/IReviewCard';

const Form = ({ createCard }: { createCard: (card: IReviewCard) => void }) => {
  const dispatch = useDispatch();
  const [isMessage, setIsMessage] = useState(false);

  const formData = useSelector((state: RootState) => state.formData);
  const isDisable = useSelector((state: RootState) => state.isDisable);
  const stateErrors = useSelector((state: RootState) => state.errors);

  const { addFormData, setIsDisable, addErrors } = AppSlice.actions;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReviewCard>();

  const registerOptions = {
    name: {
      required: 'Full Name is required',
      pattern: {
        value: /[a-zA-Z]{2,} [a-zA-Z]{2,}/i,
        message: 'Please enter correct full name. Example: "John Snow"',
      },
    },
    date: {
      required: 'Date is required',
      validate: {
        positive: (value: string) => new Date(value) < new Date() || 'Please choose correct data',
      },
    },
    agreement: {
      required: 'Agreement is required',
    },
  };

  const maxRate = 5;
  const options = new Array(maxRate).fill('someValue');

  useEffect(() => {
    return () => {
      if (Object.keys(errors).length) dispatch(setIsDisable(true));
    };
  }, [dispatch, errors, setIsDisable]);

  const showMessage = () => {
    setIsMessage(true);
    setTimeout(() => {
      setIsMessage(false);
    }, 2000);
  };

  const resetData = () => {
    reset();
    dispatch(
      addFormData({
        name: '',
        date: '',
        agreement: false,
        photo: '',
        rate: '5',
        promo: false,
        comment: '',
      })
    );
  };

  const handleData = (data: IReviewCard) => {
    const { name, date, rate, comment, promo, photo, agreement } = data;

    createCard({
      name: name,
      date: date,
      rate: rate,
      comment: comment,
      promo: promo,
      agreement: agreement,
      photo: photo.length > 0 ? URL.createObjectURL((photo as FileList)[0]) : noPhoto,
    });

    resetData();
    showMessage();
    dispatch(setIsDisable(true));
    dispatch(addErrors({}));
  };

  const handleErrors = (errors: Record<string, { message?: string }>) => {
    dispatch(
      addErrors({
        name: errors.name?.message,
        date: errors.date?.message,
        agreement: errors.agreement?.message,
      })
    );
  };

  const handleChange = (e: SyntheticEvent) => {
    const name = (e.target as HTMLInputElement).name;
    const value =
      (e.target as HTMLInputElement).type !== 'checkbox'
        ? (e.target as HTMLInputElement).value
        : (e.target as HTMLInputElement).checked;

    dispatch(
      addFormData({
        ...formData,
        [name]: value,
      })
    );

    dispatch(addErrors({}));

    if (!Object.keys(errors).length) dispatch(setIsDisable(false));
  };

  return (
    <>
      <p data-testid="message" className="form__message">
        {isMessage ? 'Data saved successfully' : ''}
      </p>
      <form
        className="form"
        onSubmit={handleSubmit(handleData, handleErrors)}
        onChange={handleChange}
      >
        <label>
          <span>Full Name:</span>
          <input
            type="text"
            {...register('name', registerOptions.name)}
            autoFocus
            value={formData.name}
          />
          {(stateErrors.name || errors?.name) && (
            <span className="form__error show">{errors.name?.message || stateErrors.name}</span>
          )}
        </label>
        <label>
          <span>Order Date:</span>
          <input type="date" {...register('date', registerOptions.date)} value={formData.date} />
          {(stateErrors.date || errors?.date) && (
            <span data-testid="data-error" className="form__error show">
              {errors.date?.message || stateErrors.date}
            </span>
          )}
        </label>
        <label>
          <span>Product Photo:</span>
          <input type="file" {...register('photo')} />
        </label>
        <label>
          <span>Rate:</span>
          <select {...register('rate')} value={formData.rate}>
            {options
              .map((option, idx) => (
                <option value={idx + 1} key={idx + 1}>
                  {idx + 1}&#9733;
                </option>
              ))
              .reverse()}
          </select>
        </label>
        <label>
          <span>Comment: </span>
          <textarea {...register('comment')} value={formData.comment}></textarea>
        </label>
        <label className="switch-wrapper">
          <span>I want to get notified about promotions</span>
          <input type="checkbox" {...register('promo')} checked={formData.promo} />
          <div className="switch"></div>
        </label>
        <label className="checkbox-wrapper">
          <span>I agree to data processing rules</span>
          <input
            className="checkbox"
            type="checkbox"
            {...register('agreement', registerOptions.agreement)}
            name="agreement"
            checked={formData.agreement}
          />
          {(stateErrors.agreement || errors?.agreement) && (
            <span className="form__error show">
              {errors?.agreement?.message || stateErrors.agreement}
            </span>
          )}
        </label>
        <button
          className="form__submit"
          type="submit"
          disabled={isDisable || !!Object.keys(errors).length}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
