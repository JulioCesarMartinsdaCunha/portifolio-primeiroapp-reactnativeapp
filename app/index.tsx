import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "../styles/appStyles";
import { Experiencia } from "../types/Experiencia";

const EXPERIENCIAS: Experiencia[] = [
  {
    id: "1",
    titulo: "Desenvolvedor de Jogos",
    local: "NoStart",
    periodo: "2022 - Atual",
    desc: "Desenvolvo jogos na Godot utilizando C# e o framework de jogos Godot 4.0",
  },
  {
    id: "2",
    titulo: "Desenvolvedor Full-Stack",
    local: "404Devs",
    periodo: "2024 - Atual",
    desc: "Criação de APIs em Java utilizando Springboot e integração com front-end (com react ou não).",
  },
  {
    id: "3",
    titulo: "Experiências de suporte de TI",
    local: "20Pila",
    periodo: "2021 - 2023",
    desc: "Costumava a ajudar com problemas tecnicos no 20Pila.",
  },
];

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleContact() {
    if (!message.trim()) {
      Alert.alert("Mensagem vazia", "Por favor, escreva uma mensagem antes de enviar.");
      return;
    }

    const to = "juliocmcnha@gmail.com"; // ← troque pelo seu e-mail
    const subject = "Contato pelo app de currículo";
    const bodyLines = [
      name ? `Nome: ${name}` : "",
      email ? `Email: ${email}` : "",
      "",
      "Mensagem:",
      message,
    ].filter(Boolean);

    const body = bodyLines.join("\n");
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl).catch(() => {
      Alert.alert(
        "Erro ao abrir o e-mail",
        "Não foi possível abrir o aplicativo de e-mail neste dispositivo."
      );
    });

    Alert.alert("Sucesso ao enviar Email", "Seu email foi me enviado com sucesso! Muito obrigado!");
  }

  function renderVivencias({ item }: { item: Experiencia }) {
    return (
      <View style={styles.experienceCard}>
        <Text style={styles.experienceTitle}>{item.titulo}</Text>
        <Text style={styles.experienceCompany}>{item.local}</Text>
        <Text style={styles.experiencePeriod}>{item.periodo}</Text>
        <Text style={styles.experienceDescription}>{item.desc}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={require("../assets/images/eumesmo.jpg")}
          />
          <Text style={styles.name}>Júlio Cesar Martins da Cunha</Text>
          <Text style={styles.role}>Aspirante à Analista de sistemas</Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre mim</Text>
          <Text style={styles.sectionText}>
            Sou estudante de ADS no Senac de Recife. Tenho experiências com Java, C#, C/C++, Python e MySQL. Estou aprendendo a utilizar: React, React Native, Springboot, Typescript. Estou no 3º periodo da faculdade e estou me preparando para procurar estágio.
          </Text>
        </View>



        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Minhas Experiencias com a tecnologia</Text>
          <FlatList
            data={EXPERIENCIAS}
            keyExtractor={(item) => item.id}
            renderItem={renderVivencias}
            scrollEnabled={false}
          />
        </View>

 
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Me contatar</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Digite sua mensagem..."
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.button} onPress={handleContact}>
            <Text style={styles.buttonText}>Enviar mensagem</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}