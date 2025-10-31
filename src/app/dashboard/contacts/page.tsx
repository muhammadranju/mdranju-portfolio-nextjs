"use client";
import BackButton from "@/components/BackButton/BackButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  message: string;
  country?: string;
  createdAt?: string;
}

export default function ContactPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingContactId, setDeletingContactId] = useState<string | null>(
    null
  );
  const [viewingContact, setViewingContact] = useState<Contact | null>(null);
  const contactsPerPage = 10;

  const getContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/contacts`);
      if (!res.ok) throw new Error("Failed to fetch contacts");
      const { data } = await res.json();
      setContacts(data || []);
      setFilteredContacts(data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      return (
        fullName.includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredContacts(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, contacts]);

  // Pagination logic
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevPage = () => handlePageChange(currentPage - 1);
  const handleNextPage = () => handlePageChange(currentPage + 1);

  const handleView = (contact: Contact) => {
    setViewingContact(contact);
    setShowModal(true);
  };

  const handleConfirmDelete = (id: string) => {
    setDeletingContactId(id);
    setShowDeleteModal(true);
  };

  const handleExecuteDelete = async () => {
    setIsDeleting(true);
    if (!deletingContactId) return;
    try {
      const res = await fetch(`/api/contacts/${deletingContactId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Contact deleted successfully");
        // Refresh list
        const refreshRes = await fetch("/api/contacts");
        const { data } = await refreshRes.json();
        setContacts(data || []);
        setIsDeleting(false);
      } else {
        setIsDeleting(false);
        toast.error("Failed to delete contact");
      }
    } catch (error) {
      setIsDeleting(false);
      toast.error("Error deleting contact");
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
      setDeletingContactId(null);
    }
  };

  if (loading) {
    return (
      <div className="relative h-screen bg-slate-100 dark:bg-[#020617]">
        <div className="mx-auto max-w-7xl px-2">
          <div className="pt-24 md:pt-36 mb-5">
            <Skeleton className="h-8 w-48" />
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {[...Array(6)].map((_, i) => (
                        <TableHead key={i}>
                          <Skeleton className="h-6 w-20" />
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...Array(12)].map((_, i) => (
                      <TableRow key={i}>
                        {[...Array(6)].map((_, j) => (
                          <TableCell key={j}>
                            <Skeleton className="h-4 w-full" />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-100 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-2">
        <div className="pt-24 md:pt-36 flex justify-between items-center mb-5">
          <h2 className="lg:text-3xl font-bold text-foreground">Contacts</h2>
          <div className="flex gap-x-2">
            <BackButton />
            <Link href={"/dashboard/contacts/add"}>
              <Button className="rounded-lg" variant={"outline"}>
                <Plus className="mr-2 h-4 w-4" /> Add Contact
              </Button>
            </Link>
          </div>
        </div>

        {/* Search Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search Contacts</CardTitle>
            <CardDescription>
              Filter by name, email, phone, or message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contacts Table Card */}
        <Card>
          <CardHeader>
            <CardTitle>All Contacts ({filteredContacts.length})</CardTitle>
            <CardDescription>
              Recent contact submissions. Use actions to view or delete.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Message Preview</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentContacts.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="h-24 text-center text-muted-foreground"
                      >
                        {searchTerm
                          ? "No contacts match your search."
                          : "No contacts found."}
                      </TableCell>
                    </TableRow>
                  ) : (
                    currentContacts.map((contact) => (
                      <TableRow key={contact._id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          #{contact._id?.slice(-4)}
                        </TableCell>
                        <TableCell className="font-medium">
                          {`${contact.firstName} ${contact.lastName}`.trim() ||
                            "N/A"}
                        </TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {contact.email}
                          </a>
                        </TableCell>
                        <TableCell>{contact.phone || "N/A"}</TableCell>
                        <TableCell>{contact.country || "N/A"}</TableCell>
                        <TableCell className="max-w-md">
                          <div
                            className="line-clamp-2 text-sm text-muted-foreground "
                            title={contact.message}
                          >
                            {contact.message.length > 150
                              ? contact.message.substring(0, 150).concat("...")
                              : contact.message}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => handleView(contact)}
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View Message
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleConfirmDelete(contact._id)}
                                className="text-destructive focus:text-destructive"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 bg-muted/50 rounded-b-lg">
                <div className="text-sm text-muted-foreground">
                  Showing {indexOfFirstContact + 1} to{" "}
                  {Math.min(indexOfLastContact, filteredContacts.length)} of{" "}
                  {filteredContacts.length} contacts
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </Button>
                      )
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* View Modal */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Message Details</DialogTitle>
              <DialogDescription>
                Full message from{" "}
                {viewingContact
                  ? `${viewingContact.firstName} ${viewingContact.lastName}`.trim()
                  : ""}
              </DialogDescription>
            </DialogHeader>
            {viewingContact && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label className="text-sm font-medium">Name</Label>
                  <p className="text-muted-foreground">
                    {`${viewingContact.firstName} ${viewingContact.lastName}`.trim()}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-muted-foreground">
                    {viewingContact.email}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium">Phone</Label>
                  <p className="text-muted-foreground">
                    {viewingContact.phone || "N/A"}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium">Country</Label>
                  <p className="text-muted-foreground">
                    {viewingContact.country || "N/A"}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium">Message</Label>
                  <div className="p-4 bg-muted rounded-md">
                    <p className="whitespace-pre-wrap text-foreground">
                      {viewingContact.message}
                    </p>
                  </div>
                </div>
                {viewingContact.createdAt && (
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Submitted On</Label>
                    <p className="text-muted-foreground">
                      {new Date(viewingContact.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            )}
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Modal */}
        <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Are you sure you want to delete
                this contact?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeletingContactId(null);
                }}
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={handleExecuteDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <Spinner className="mr-2" /> Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
