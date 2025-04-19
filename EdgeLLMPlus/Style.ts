import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F6", // Soft off-white background
  },
  scrollView: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1E1E1E", // Charcoal black
    marginVertical: 24,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF", // Clean white card
    borderRadius: 20,
    padding: 24,
    margin: 16,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4B5563", // Dark gray text
    marginBottom: 16,
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 16,
    color: "#F472B6", // Soft pink
  },
  button: {
    backgroundColor: "#7C3AED", // Vibrant violet
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginVertical: 8,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedButton: {
    backgroundColor: "#6D28D9", // Deeper violet
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  backButton: {
    backgroundColor: "#E0E7FF",
    marginHorizontal: 16,
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  backButtonText: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "600",
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#FDF2F8",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  messageWrapper: {
    marginBottom: 16,
  },
  messageBubble: {
    padding: 14,
    borderRadius: 12,
    maxWidth: "80%",
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#F472B6", // Pink
  },
  llamaBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#C4F1F9", // Light teal
    borderWidth: 1,
    borderColor: "#06B6D4",
  },
  messageText: {
    fontSize: 16,
    color: "#1E1E1E",
  },
  userMessageText: {
    color: "#FFFFFF",
  },
  tokenInfo: {
    fontSize: 12,
    color: "#A1A1AA",
    marginTop: 4,
    textAlign: "right",
  },
  inputContainer: {
    padding: 16,
    backgroundColor: "#FAF8F6",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  inputRow: {
    flexDirection: "row",
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#1E1E1E",
    minHeight: 50,
  },
  sendButton: {
    backgroundColor: "#06B6D4", // Teal
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: "center",
  },
  stopButton: {
    backgroundColor: "#DC2626", // Red
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    justifyContent: "center",
  },
  greetingText: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    marginVertical: 12,
    color: "#6B7280",
  },
  thoughtContainer: {
    marginTop: 8,
    padding: 10,
    backgroundColor: "#FDF4FF",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#E879F9",
  },
  thoughtTitle: {
    color: "#7C3AED",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 4,
  },
  thoughtText: {
    color: "#6B7280",
    fontSize: 12,
    fontStyle: "italic",
    lineHeight: 16,
  },
  toggleButton: {
    marginTop: 8,
    paddingVertical: 4,
  },
  toggleText: {
    color: "#7C3AED",
    fontSize: 12,
    fontWeight: "500",
  },
  bottomContainer: {
    backgroundColor: "#FAF8F6",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
  },
  modelContainer: {
    marginVertical: 6,
    borderRadius: 12,
    overflow: "hidden",
  },
  modelButton: {
    backgroundColor: "#FDE68A",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FBBF24",
    shadowColor: "#F59E0B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  downloadedModelButton: {
    backgroundColor: "#C084FC",
    borderColor: "#A855F7",
  },
  modelButtonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modelStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  downloadedIndicator: {
    backgroundColor: "#A855F7",
    padding: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  notDownloadedIndicator: {
    backgroundColor: "#E5E7EB",
    padding: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  downloadedIcon: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  notDownloadedIcon: {
    color: "#9CA3AF",
    fontSize: 14,
    fontWeight: "bold",
  },
  downloadedText: {
    color: "#1E1E1E",
  },
  loadModelIndicator: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  loadModelText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  buttonTextGGUF: {
    color: "#A78BFA",
    fontSize: 14,
    fontWeight: "500",
  },
  selectedButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  downloadIndicator: {
    backgroundColor: "#10B981", // New download color
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  downloadText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  chatWrapper: {
    flex: 1,
    padding: 16,
  },
});

export default styles;
