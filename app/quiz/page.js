'use client';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import Question from '@/components/question';
import Image from 'next/image';

export default function Quiz() {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    dog_name: '',
    dog_breed: '',
    judging_level: 'Mildly Judged',
  });

  const dogQuestions = [
    // 1
    'You hype your pup up for a car‑ride adventure… and pull into the vet’s parking lot. What level of betrayal stares back at you?',
    // 2
    'You shout “Who wants a treat?”—then reveal it’s actually a toothbrush and minty dog toothpaste. How savage is the stare‑down?',
    // 3
    'You open the back door like it’s play‑time paradise, only to herd your dog straight into a foamy bath. How sudsy is the betrayal rating?',
    // 4
    'You pack the squeaky ball and leash for “the park,” but drive to the groomer for a nail‑trim marathon instead. What level of paw‑found disapproval do you earn?',
    // 5
    'You cue the happiest “walkies!” voice, step onto the sidewalk… and whip out your phone for a 47‑photo holiday costume shoot. How epic is the judgment glare?',
  ];

  const getRandomDogQuestion = () =>
    dogQuestions[Math.floor(Math.random() * dogQuestions.length)];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fields: [
        { name: 'firstname', value: formData.firstname },
        { name: 'email', value: formData.email },
        { name: 'dog_name', value: formData.dog_name },
        { name: 'dog_breed', value: formData.dog_breed },
        { name: 'judging_level', value: formData.judging_level },
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'JudgePup Custom Form',
      },
    };

    const response = await fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/242765098/e7552f77-24b0-4c5e-bd6c-a7f1d86f1aec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      alert('Form submitted successfully!');
      redirect('/thanks');
    } else {
      alert('Error submitting form.');
    }
  };

  return (
    <div className='font-archiv min-h-screen max-w-screen-md flex flex-col mx-auto justify-center items-center text-center p-8'>
      <h1 className='text-4xl font-bold mb-4'>Judgment Day: Doggy Edition</h1>
      <div className='h-40 w-40 my-5 relative'>
        <Image
          src='/wienerjudge.png'
          fill='cover'
          objectFit='cover'
          alt='Wiener Judge'
          className='rounded-r-2xl'
        />
      </div>
      <Question />
      <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 space-y-4'>
        <select
          name='judging_level'
          value={formData.judging_level}
          onChange={handleChange}
          className='w-full p-2 border rounded'
        >
          <option value='Totally Loved'>Totally Loved</option>
          <option value='Mildly Judged'>Mildly Judged</option>
          <option value='Severely Judged'>Severely Judged</option>
        </select>
        <input
          name='firstname'
          placeholder='Your Name'
          onChange={handleChange}
          required
          className='w-full p-2 border rounded'
        />
        <input
          name='email'
          placeholder='Email'
          onChange={handleChange}
          required
          className='w-full p-2 border rounded'
        />
        <input
          name='dog_name'
          placeholder='Dog Name'
          onChange={handleChange}
          className='w-full p-2 border rounded'
        />
        <input
          name='dog_breed'
          placeholder='Dog Breed'
          onChange={handleChange}
          className='w-full p-2 border rounded'
        />
        <button
          type='submit'
          className='px-6 py-3 bg-green-600 text-white rounded-full'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
