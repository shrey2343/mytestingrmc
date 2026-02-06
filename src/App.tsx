import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartupsEnterprisesPage from "./pages/StartupsEnterprisesPage";
import HealthcareLifeSciencesPage from "./pages/HealthcareLifeSciencesPage";
import MedComResearchAgenciesPage from "./pages/MedComResearchAgenciesPage";
import ResearchForEveryonePage from "./pages/ResearchForEveryonePage";
import ResearchPaperPublicationPage from "./pages/ResearchPaperPublicationPage";
import PhdAssistancePage from "./pages/PhdAssistancePage";
import MastersResearchAssistancePage from "./pages/MastersResearchAssistancePage";
import DataAnalysisPage from "./pages/DataAnalysisPage";
import EssayWritingPage from "./pages/EssayWritingPage";
import EditingPage from "./pages/EditingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import CareerPage from "./pages/CareerPage";
import BlogPage from "./pages/BlogPage";
import PublishingResearchPaper from "./pages/blog/PublishingResearchPaper";
import ResearchMethodology from "./pages/blog/ResearchMethodology";
import NotFound from "./pages/NotFound";
import GlobalAdmissionStandout from "./pages/GlobalAdmissionStandout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/startups-enterprises" element={<StartupsEnterprisesPage />} />
          <Route path="/healthcare-life-sciences" element={<HealthcareLifeSciencesPage />} />
          <Route path="/medcom-research-agencies" element={<MedComResearchAgenciesPage />} />
          <Route path="/research-for-everyone" element={<ResearchForEveryonePage />} />
          <Route path="/research-paper-publication" element={<ResearchPaperPublicationPage />} />
          <Route path="/phd-assistance" element={<PhdAssistancePage />} />
          <Route path="/masters-research-assistance" element={<MastersResearchAssistancePage />} />
          <Route path="/data-analysis" element={<DataAnalysisPage />} />
          <Route path="/essay-writing" element={<EssayWritingPage />} />
          <Route path="/editing" element={<EditingPage />} />
          <Route path="/global-admission-standout" element={<GlobalAdmissionStandout />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/publishing-research-paper" element={<PublishingResearchPaper />} />
          <Route path="/blog/research-methodology" element={<ResearchMethodology />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
