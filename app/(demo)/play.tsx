import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FaceOffHeader from '@/components/FaceOffHeader';
import CircularTimer from '@/components/CircularTimer';
import images from '@/constants/images';
import { getUserId } from '@/lib/appwrite';

const questionsResponse = [
	{
		id: 1,
		questionText: [
			'Many factory workers in the 19th century thought their jobs ',
			{ text: '(1) were safe but we know', style: 'bold underlined' },
			' now that they were wrong.',
		],
		answers: [
			{
				id: 1,
				choice: 'A',
				text: 'No change',
				correct: false,
			},
			{
				id: 2,
				choice: 'B',
				text: 'were safe, but we know',
				correct: true,
			},
			{
				id: 3,
				choice: 'C',
				text: 'were safe; but we know',
				correct: false,
			},
			{
				id: 4,
				choice: 'D',
				text: 'were safe But we know',
				correct: false,
			},
		],
	},
];

const Play = () => {
	
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [isQuestionActive, setIsQuestionActive] = useState(false);
	const [isTimerActive, setIsTimerActive] = useState(false);
	const [score, setScore] = useState([0, 0]);

	const handleSelectAnswer = (answerId: number) => {
		setSelectedAnswer(answerId);
		const correctAnswer = questionsResponse[0].answers.find(
			(answer) => answer.correct
		);
		if (correctAnswer && correctAnswer.id === answerId) {
			// Correct answer
			setScore((prevScore) => [prevScore[0] + 1, prevScore[1]]);
		}
	};

	const handleBuzzerTouch = () => {
		// We probably want to make an API/function call here to set the match to the current user
		const user = getUserId();
		console.log('user', user);
		setIsQuestionActive(true);
		setIsTimerActive(true);
	};

	const handleTimerComplete = () => {
		setIsQuestionActive(false);
		setIsTimerActive(false);
	};

	return (
		<SafeAreaView className='bg-light'>
			<View className='w-full h-full flex flex-col justify-start items-center mb-4'>
				{isQuestionActive ? (
					<View className='border-2 border-[#FF0000] p-4' style={{height: verticalScale(50), marginTop: verticalScale(16), marginBottom: verticalScale(6)}}>
						<Text className='font-clashmedium' style={{fontSize: moderateScale(24)}}>You are on the clock!</Text>
					</View>
				): <FaceOffHeader />}
				{questionsResponse.map((question) => (
					<>
						<View style={{paddingHorizontal: scale(25)}}>
							<Text key={question.id} numberOfLines={5} className='font-clashmedium text-xl p-2 mt-4' style={{fontSize: moderateScale(18), lineHeight: moderateVerticalScale(25)}}>
								{question.questionText.map((part) =>
									typeof part === 'string' ? (
										part
									) : (
										<Text className='font-clashsemibold' style={{textDecorationLine: 'underline'}}>
											{part.text}
										</Text>
									)
								)}
							</Text>
						</View>
						<View className='my-2' style={{width: scale(300), gap: verticalScale(2), paddingTop: verticalScale(10), paddingBottom: verticalScale(4)}}>
							{question.answers.map((answer) => (
								<TouchableOpacity
									key={answer.id}
									className={`flex flex-row items-center justify-start p-4 my-1 bg-[#F4F4F4] border-2 border-gray-800 ${
										selectedAnswer === answer.id
											? answer.correct
												? 'bg-green-300 border-green-300'
												: 'bg-red-300 border-red-300'
											: 'border-gray-400'
									} border border-gray-300 rounded-lg`}
									onPress={() => handleSelectAnswer(answer.id)}
									disabled={!isQuestionActive} // Disable when toggleQuestionActive is false
									style={!isQuestionActive ? { opacity: 0.6 } : {}} // Optional: Reduce opacity when disabled
								>
									<View
										className={`w-6 h-6 rounded-full mr-2 border-2 ${
											selectedAnswer === answer.id
												? answer.correct
													? 'bg-green-600 border-green-600'
													: 'bg-red-600 border-red-600'
												: 'border-gray-400'
										}`}
									/>
									<Text className='font-poppinsregular' style={{fontSize: moderateScale(14)}}>
										{answer.choice + ': ' + answer.text}
									</Text>
								</TouchableOpacity>
							))}
						</View>
					</>
				))}
				<Text className='font-clashsemibold' style={{fontSize: moderateScale(14)}}> {"First to 4!"} </Text>
				<View className='flex flex-row justify-between items-center' style={{gap: scale(25)}}>
					<View className='flex flex-col items-center'>
						<Text className='font-clashmedium' style={{fontSize: moderateScale(18)}}>{score[0]}</Text>
						<View className='rounded-full' style={styles.dropShadow}>
							<Image
								source={images.user1}
								className='rounded-full shadow-2xl'
								style={{width: scale(50), height: scale(50)}}
							/>
						</View>
					</View>
					<View className='border-2 rounded-lg border-[#7F0000]  mx-4 p-2'>
						<Text className='text-[#7F0000]' style={{fontSize: moderateScale(18)}}>VS</Text>
					</View>
					<View className='flex flex-col items-center'>
						<Text className='font-clashmedium' style={{fontSize: moderateScale(18)}}>{score[1]}</Text>
						<View className='rounded-full' style={styles.dropShadow}>
							<Image
								source={images.user2}
								className='rounded-full shadow-2xl'
								style={{width: scale(50), height: scale(50)}}
							/>
						</View>
					</View>
				</View>
				{!isQuestionActive ? (
					<TouchableOpacity onPress={handleBuzzerTouch} style={{width: scale(160), height: verticalScale(120)}}>
						<Image
							source={images.buzzerButton}
							className='w-full h-full'
							resizeMode='contain'
						/>
					</TouchableOpacity>
				) : (
					<View className='flex flex-1 items-center' style={{paddingVertical: verticalScale(20)}}>
						<CircularTimer
							isActive={isTimerActive}
							onTimerComplete={handleTimerComplete}
							seconds={3}
							radius={scale(40)}
							thickness={scale(15)}
							color='dimgray'
						/>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f3f3f3',
	},
	dropShadow: {
		shadowColor: '#000', // Black shadow for iOS
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 8, // For Android
		backgroundColor: 'white', // Background color is necessary to see the shadow
	},
	question: {
		fontSize: 16,
		color: '#000',
		padding: 10,
	},
	bold: {
		fontWeight: 'bold',
	},
	underline: {
		textDecorationLine: 'underline',
	},
});

export default Play;
