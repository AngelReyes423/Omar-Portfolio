import { useEffect, useRef, useState } from "react";

import {
  Animated,
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const GITHUB_URL = "https://github.com/AngelReyes423";

const CV_URL = "";

const projects = [
  {
    id: 1,
    name: "Tamalera App",
    description:
      "A customizable real-time mapping application using Google Maps.",
    skills: "HTML • CSS • JavaScript • Google Maps API",
    url: "https://angelreyes423.github.io/apptamalera69/",
  },
  {
    id: 2,
    name: "Umagram",
    description:
      "A website displaying umas in interactive cards using Object-Oriented Programming.",
    skills: "HTML • CSS • JavaScript • OOP",
    url: "",
  },
];
const skillGroups = [
  {
    title: "FRONTEND DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript", "React Native"],
  },
  {
    title: "TOOLS & TECHNOLOGIES",
    skills: ["Visual Studio Code", "Visual Studio", "Git", "Expo"],
  },
  {
    title: "OTHER SKILLS",
    skills: ["Object-Oriented Programming", "Responsive Design"],
  },
];

type Tab = "Home" | "Skills" | "CV" | "Projects";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("Home");

  const animation = useRef(new Animated.Value(1)).current;

  const persona = {
    name: "Ángel Omar Reyes García",
    profession: "Web Development Engineering Student",
    description:
      "I am a student in the Web Development Engineering Career (UTLD). I enjoy creating digital experiences and learning new technologies.",
    email: "angelomarreyesg350@gmail.com",
    location: "Mexico",
  };

  const colors = isDark
    ? {
        background: "#09090D",
        card: "#171720",
        secondary: "#22212D",
        primary: "#A855F7",
        text: "#FFFFFF",
        muted: "#A1A1AA",
        border: "#30283C",
      }
    : {
        background: "#F5F3F9",
        card: "#FFFFFF",
        secondary: "#EEE8F5",
        primary: "#8438C5",
        text: "#21182B",
        muted: "#716B7A",
        border: "#E1D7EB",
      };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      paddingTop: 55,
      paddingHorizontal: 20,
      paddingBottom: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      color: colors.primary,
      fontSize: 24,
      fontWeight: "bold",
    },
    themeButton: {
      backgroundColor: colors.secondary,
      padding: 11,
      borderRadius: 20,
    },
    themeText: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 12,
    },
    navigation: {
      flexDirection: "row",
      marginHorizontal: 15,
      marginBottom: 25,
      backgroundColor: colors.card,
      borderRadius: 14,
      padding: 5,
    },
    navButton: {
      flex: 1,
      paddingVertical: 12,
      alignItems: "center",
      borderRadius: 10,
    },
    navActive: {
      backgroundColor: colors.primary,
    },
    navText: {
      color: colors.muted,
      fontSize: 11,
      fontWeight: "bold",
    },
    navTextActive: {
      color: "#FFFFFF",
    },
    content: {
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
    title: {
      color: colors.text,
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 8,
    },
    subtitle: {
      color: colors.muted,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 25,
    },
    card: {
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 17,
      padding: 20,
      marginBottom: 15,
    },
    profile: {
      alignItems: "center",
      paddingVertical: 30,
    },
    heroEyebrow: {
      color: colors.primary,
      fontSize: 11,
      fontWeight: "bold",
      letterSpacing: 2,
      marginBottom: 25,
    },

    actionRow: {
      flexDirection: "row",
      width: "100%",
      gap: 10,
      marginTop: 25,
    },

    actionButton: {
      flex: 1,
      backgroundColor: colors.primary,
      paddingVertical: 14,
      paddingHorizontal: 8,
      borderRadius: 10,
      alignItems: "center",
    },

    actionButtonSecondary: {
      flex: 1,
      backgroundColor: colors.secondary,
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: 14,
      paddingHorizontal: 8,
      borderRadius: 10,
      alignItems: "center",
    },

    actionButtonText: {
      color: "#FFFFFF",
      fontSize: 11,
      fontWeight: "bold",
    },

    actionButtonSecondaryText: {
      color: colors.text,
      fontSize: 11,
      fontWeight: "bold",
    },
    photo: {
      width: 125,
      height: 125,
      borderRadius: 65,
      borderWidth: 3,
      borderColor: colors.primary,
      marginBottom: 20,
    },
    name: {
      color: colors.text,
      fontSize: 23,
      fontWeight: "bold",
      textAlign: "center",
    },
    profession: {
      color: colors.primary,
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 10,
      textAlign: "center",
    },
    description: {
      color: colors.muted,
      textAlign: "center",
      marginTop: 15,
      lineHeight: 23,
    },
    sectionLabel: {
      color: colors.primary,
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 10,
    },
    projectName: {
      color: colors.text,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    projectDescription: {
      color: colors.muted,
      fontSize: 14,
      lineHeight: 22,
    },
    technology: {
      color: colors.primary,
      fontSize: 12,
      fontWeight: "bold",
      marginTop: 15,
    },
    skillGroup: {
      backgroundColor: colors.card,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 18,
      marginBottom: 15,
    },
    skillContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 9,
    },
    skill: {
      backgroundColor: colors.secondary,
      paddingHorizontal: 13,
      paddingVertical: 10,
      borderRadius: 9,
    },
    skillText: {
      color: colors.text,
      fontSize: 12,
      fontWeight: "bold",
    },
    button: {
      backgroundColor: colors.primary,
      padding: 16,
      borderRadius: 12,
      alignItems: "center",
      marginTop: 15,
    },
    buttonText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 14,
    },
    footer: {
      alignItems: "center",
      paddingVertical: 25,
    },
    footerText: {
      color: colors.muted,
      fontSize: 12,
    },
    statusBadge: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: 20,
    },

    statusDot: {
      width: 7,
      height: 7,
      borderRadius: 5,
      backgroundColor: "#22C55E",
      marginRight: 7,
    },

    statusText: {
      color: colors.muted,
      fontSize: 10,
      fontWeight: "bold",
    },
  });

  useEffect(() => {
    animation.setValue(0);

    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);

  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  const openCV = async () => {
    if (!CV_URL) {
      console.log("CV link has not been configured yet.");
      return;
    }

    try {
      await Linking.openURL(CV_URL);
    } catch (error) {
      console.log("Could not open CV:", error);
    }
  };
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <>
            <View style={[styles.card, styles.profile]}>
              <Text style={styles.heroEyebrow}>WELCOME TO MY PORTFOLIO</Text>
              <Image
                source={require("../../assets/foto_perfil.jpg")}
                style={styles.photo}
              />

              <Text style={styles.name}>{persona.name}</Text>

              <Text style={styles.profession}>{persona.profession}</Text>

              <Text style={styles.description}>{persona.description}</Text>
              <View style={styles.actionRow}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => Linking.openURL(GITHUB_URL)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.actionButtonText}>VIEW GITHUB ↗</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.actionButtonSecondary}
                  onPress={() => Linking.openURL(`mailto:${persona.email}`)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.actionButtonSecondaryText}>
                    CONTACT ME
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.title}>Contact</Text>

            <View style={styles.card}>
              <Text style={styles.sectionLabel}>GET IN TOUCH</Text>

              <TouchableOpacity
                onPress={() => Linking.openURL(GITHUB_URL)}
                activeOpacity={0.7}
              >
                <Text style={styles.projectDescription}>
                  GITHUB: github.com/AngelReyes423 ↗
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Linking.openURL(`mailto:${persona.email}`)}
                activeOpacity={0.7}
                style={{ marginTop: 18 }}
              >
                <Text style={styles.projectDescription}>
                  EMAIL: {persona.email} ↗
                </Text>
              </TouchableOpacity>
            </View>
          </>
        );

      case "Skills":
        return (
          <>
            <Text style={styles.title}>My Skills</Text>

            <Text style={styles.subtitle}>
              Technologies and tools I have worked with.
            </Text>

            {skillGroups.map((group, index) => (
              <View key={index} style={styles.skillGroup}>
                <Text style={styles.sectionLabel}>{group.title}</Text>

                <View style={styles.skillContainer}>
                  {group.skills.map((skill) => (
                    <View key={skill} style={styles.skill}>
                      <Text style={styles.skillText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </>
        );

      case "CV":
        return (
          <>
            <Text style={styles.title}>My Curriculum Vitae</Text>

            <Text style={styles.subtitle}>
              Learn more about my education, experience and technical skills.
            </Text>

            <View style={[styles.card, { alignItems: "center", padding: 30 }]}>
              <Text style={{ fontSize: 55 }}>📄</Text>

              <Text style={[styles.projectName, { marginTop: 20 }]}>
                Professional CV
              </Text>

              <Text
                style={[styles.projectDescription, { textAlign: "center" }]}
              >
                Ángel Omar Reyes García{"\n"}
                Web Development Engineering Student
              </Text>

              <TouchableOpacity
                style={[styles.button, { width: "100%" }]}
                onPress={openCV}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>CHECK MY CV ↗</Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: colors.muted,
                  fontSize: 11,
                  marginTop: 15,
                  textAlign: "center",
                }}
              ></Text>
            </View>
          </>
        );

      case "Projects":
        return (
          <>
            <Text style={styles.title}>My Projects</Text>

            <Text style={styles.subtitle}>
              Some of the projects I have developed.
            </Text>

            {projects.map((project) => (
              <View key={project.id} style={styles.card}>
                <Text style={styles.sectionLabel}>PROJECT 0{project.id}</Text>

                <Text style={styles.projectName}>{project.name}</Text>

                <Text style={styles.projectDescription}>
                  {project.description}
                </Text>

                <Text style={styles.technology}>{project.skills}</Text>
                {project.url !== "" && (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(project.url)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.buttonText}>VIEW PROJECT ↗</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </>
        );
    }
  };

  const tabs: Tab[] = ["Home", "Skills", "CV", "Projects"];

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>OMAR.DEV</Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>DEVELOPER</Text>
          </View>

          <TouchableOpacity
            style={styles.themeButton}
            onPress={() => setIsDark(!isDark)}
            activeOpacity={0.7}
          >
            <Text style={styles.themeText}>
              {isDark ? "☀ LIGHT" : "☾ DARK"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* NAVIGATION */}
      <View style={styles.navigation}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.navButton, activeTab === tab && styles.navActive]}
            onPress={() => changeTab(tab)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.navText,
                activeTab === tab && styles.navTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* PAGE CONTENT */}
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View
          style={{
            opacity: animation,
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [15, 0],
                }),
              },
            ],
          }}
        >
          {renderContent()}
        </Animated.View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 OMAR.DEV</Text>

          <Text
            style={[styles.footerText, { marginTop: 6, color: colors.primary }]}
          >
            Designed with React Native
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
