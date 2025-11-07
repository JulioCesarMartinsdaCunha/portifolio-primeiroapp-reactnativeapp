import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#38bdf8",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  role: {
    fontSize: 16,
    color: "#9ca3af",
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
    backgroundColor: "#020617",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e5e7eb",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "#d1d5db",
    lineHeight: 20,
  },
  experienceCard: {
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#111827",
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e5e7eb",
  },
  experienceCompany: {
    fontSize: 14,
    color: "#38bdf8",
    marginTop: 2,
  },
  experiencePeriod: {
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 2,
  },
  experienceDescription: {
    fontSize: 13,
    color: "#d1d5db",
    marginTop: 4,
  },
  input: {
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#e5e7eb",
    marginBottom: 10,
    fontSize: 14,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#020617",
    fontSize: 16,
    fontWeight: "600",
  },
});