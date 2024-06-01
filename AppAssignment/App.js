import React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const categories = [
  { id: '1', title: 'Exercise', image: require('./images/exercise.png'), taskCount: 12 },
  { id: '2', title: 'Study', image: require('./images/study.png'), taskCount: 5 },
  { id: '3', title: 'Code', image: require('./images/code.png'), taskCount: 8 },
  { id: '4', title: 'Cook', image: require('./images/cook.png'), taskCount: 6 },
  { id: '5', title: 'Read', image: require('./images/read.png'), taskCount: 7 },
  { id: '6', title: 'Meditate', image: require('./images/meditation.png'), taskCount: 4 },
  { id: '7', title: 'Work', image: require('./images/work.png'), taskCount: 9 },
  { id: '8', title: 'Relax', image: require('./images/.png'), taskCount: 3 },
];

const ongoingTasks = [
  { id: '1', task: 'Mobile App Development' },
  { id: '2', task: 'Web Development' },
  { id: '3', task: 'Push Ups' },
  { id: '4', task: 'Reading a Book' },
  { id: '5', task: 'Meditation Session' },
  { id: '6', task: 'Cooking Dinner' },
  { id: '7', task: 'Writing a Blog Post' },
  { id: '8', task: 'Exercise Routine' },
  { id: '9', task: 'Learning Spanish' },
  { id: '10', task: 'Client Meeting' },
  { id: '11', task: 'Gardening' },
  { id: '12', task: 'Yoga' },
  { id: '13', task: 'Grocery Shopping' },
  { id: '14', task: 'House Cleaning' },
  { id: '15', task: 'Watching a Tutorial' },
];

const TaskCard = ({ title, image, taskCount }) => (
  <View style={styles.taskCard}>
    <Image source={image} style={styles.taskImage} />
    <Text style={styles.taskTitle}>{title}</Text>
    <Text style={styles.taskCount}>{taskCount} Tasks</Text>
  </View>
);

const OngoingTask = ({ task }) => (
  <View style={styles.ongoingTask}>
    <Text style={styles.ongoingTaskText}>{task}</Text>
  </View>
);

const App = () => {
  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Hello, Devs</Text>
          <Text style={styles.headerSubtitle}>14 tasks today</Text>
        </View>
        <Image
          source={require('./assets/person.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
        <View style={styles.filterButton}>
          <Feather name="sliders" size={20} color="#FFF" />
        </View>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <TaskCard {...item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.categoryColumn}
        showsVerticalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
    </>
  );

  return (
    <FlatList
      style={styles.container}
      data={ongoingTasks}
      renderItem={({ item }) => <OngoingTask {...item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF7F2',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#718096',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  filterButton: {
    backgroundColor: '#FF6347',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  taskCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    flex: 1,
  },
  taskImage: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  taskTitle: {
    fontWeight: 'bold',
  },
  taskCount: {
    color: '#718096',
  },
  categoryColumn: {
    justifyContent: 'space-between',
  },
  ongoingTask: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  ongoingTaskText: {
    fontWeight: 'bold',
  },
});
