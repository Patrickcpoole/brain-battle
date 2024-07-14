import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import images from '@/constants/images';
import { getUserId } from '@/lib/appwrite';
import React, { useState } from 'react';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import FaceOffHeader from '@/components/FaceOffHeader';
import CircularTimer from '@/components/CircularTimer';
import { horizontalScale } from '@/utils/Mertics';

const questionsResponse = [
	{
		id: 1,
		questionText: [
			'Many factory workers in the 19th century thought their jobs ',
			{ text: 'were safe but we know', style: 'bold' },
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
		<SafeAreaView style={styles.container}>
			<View className='flex flex-col justify-start items-center my-4 px-8'>
				
				{isQuestionActive ? (
					<View className='border-2 border-[#FF0000] p-4'>
						<Text className='text-3xl'>You are on the clock!</Text>
					</View>
				): <FaceOffHeader />}
				{questionsResponse.map((question) => (
					<>
						<Text key={question.id} className='text-xl p-2 mt-4 '>
							{question.questionText.map((part) =>
								typeof part === 'string' ? (
									part
								) : (
									<Text style={styles[part.style as keyof typeof styles]}>
										{part.text}
									</Text>
								)
							)}
						</Text>
						<View className='rounded-sm bg-[#F4F4F4] w-[90%] my-2'>
							{question.answers.map((answer) => (
								<TouchableOpacity
									key={answer.id}
									className={`flex flex-row items-center justify-start p-4 my-1 border-2 border-gray-800 ${
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
									<Text className='text-base'>
										{answer.choice + ': ' + answer.text}
									</Text>
								</TouchableOpacity>
							))}
						</View>
					</>
				))}

				<View className='flex flex-row justify-between items-center  w-[80%]'>
					<View className='flex flex-col items-center'>
						<Text className='text-3xl'>{score[0]}</Text>
						<View className='rounded-full' style={styles.dropShadow}>
							<Image
								source={images.user1}
								className='rounded-full w-20 h-20 shadow-2xl'
							/>
						</View>
					</View>
					<View className='border-2 rounded-lg border-[#7F0000]  mx-4 p-2'>
						<Text className='text-[#7F0000] text-2xl'>VS</Text>
					</View>
					<View className='flex flex-col items-center'>
						<Text className='text-3xl'>{score[1]}</Text>
						<View className='rounded-full' style={styles.dropShadow}>
							<Image
								source={images.user2}
								className='rounded-full w-20 h-20 shadow-2xl'
							/>
						</View>
					</View>
				</View>
				{!isQuestionActive ? (
					<TouchableOpacity onPress={handleBuzzerTouch}>
						<Image
							source={images.buzzerButton}
							resizeMode='contain'
							style={{
								width: horizontalScale(200),
								height: verticalScale(150),
							}}
						/>
					</TouchableOpacity>
				) : (
					<View
						style={{
							marginTop: 120,
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<CircularTimer
							isActive={isTimerActive}
							onTimerComplete={handleTimerComplete}
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
