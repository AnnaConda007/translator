import  { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import firstImg from "../../assets/img/instructions/1.jpg"
import secondImg from "../../assets/img/instructions/2.jpg"
import thirdImg from "../../assets/img/instructions/3.jpg"
interface SlideData {
  image: string;
  caption: string;
}

const slides: SlideData[] = [
  {
    image: firstImg,
    caption:
      "До 5 верных ответов: простой тест.",
  },
  {
    image: secondImg,
    caption:
      "Более 5 правильных ответов: перевод слова.",
  },
  {
    image: thirdImg,
    caption:
    "Более 10 ответов: перевод слова на иностранный язык.",
  },
];


const Instructions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Box   position="relative" sx={{overflow :"hidden"}}>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}  >
        Пополните словарь для прохождения теста 
      </Typography>
      <Typography variant="body2"   sx={{ textAlign: 'justify' }}> 
     Тип задания зависит от верных ответов
      </Typography>
      <Typography variant="body2"  sx={{ textAlign: 'justify' }}  >
        {slides[currentIndex].caption}
      </Typography>
 
      <img 
   src={slides[currentIndex].image} 
   alt={slides[currentIndex].caption} 
   style={{ width: '100%', margin: 0, padding: 0 }}
/>

      <IconButton 
        onClick={goPrev}
        sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)'}}
      >
        <ArrowBackIosIcon />
      </IconButton>
 
      <IconButton 
        onClick={goNext}
        sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)'}}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default Instructions;
